import config from './configs/index.js';
import { AJAX, sleep } from './helper.js';
import Croppr from 'croppr';

const fadeIn = function (element, duration = 600) {
  element.style.display = '';
  element.style.opacity = 0;
  let last = +new Date();
  const tick = function () {
    element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
    last = +new Date();
    if (+element.style.opacity < 1) {
      (window.requestAnimationFrame && window.requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };
  tick();
};

const getNewPic = async function () {
  try {
    const data = await AJAX(config.API_URL + config.API_OPTIONS.PICTURE, 'GET');
    return data;
  } catch (err) {
    console.log(err);
  }
};

const loadingPicture = function (selector = '.img__feature-sel') {
  const image = document.querySelector(selector);
  image.classList.add('img__feature-sel--loading');
};

const replacePicture = function (newImgUrl, currentImgSelector = '.img__feature-sel') {
  const curImg = document.querySelector(currentImgSelector);
  const newImg = document.createElement('img');
  const parent = curImg.parentNode;
  const loadedImage = new window.Image();
  loadedImage.onload = function () {
    newImg.src = this.src;
    newImg.classList.add('img__feature-sel');
    parent.replaceChild(newImg, curImg);
    fadeIn(newImg);

    const croppr = new Croppr('.img__feature-sel',
      {
        // onInitialize: function (instance) {
        //   console.log(instance);
        // }
        onCropEnd: function (value) {
          console.log(value);
        }
      });

    document.querySelector('.btn__header.btn__header--feature').addEventListener('click', () => {
      console.log(croppr.getValue());
    });
  };
  loadedImage.src = newImgUrl;
};

const getPicture = async function () {
  loadingPicture();
  const data = await getNewPic();
  const newImgSrc = config.API_IMAGES + data;
  replacePicture(newImgSrc);
};

const newPicture = function (url) {
  if (url) {
    replacePicture(url, '.img__feature-sel, .croppr-container');
  }
};

const next = async function (url) {
  try {
    const data = await AJAX(config.API_URL + config.API_OPTIONS.NEXT,
      'POST', { imageURL: url });
    newPicture(data);
  } catch (err) {
    console.log(err);
  }
};

const prev = async function (url) {
  try {
    const data = await AJAX(config.API_URL + config.API_OPTIONS.PREV,
      'POST', { imageURL: url });
    newPicture(data);
  } catch (err) {
    console.log(err);
  }
};

const randomPics = function () {
  const newUrl = getNewPic().then(() => { sleep(1000); randomPics(); });
  newPicture(newUrl);
  console.log(newUrl);
};

window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.img__feature-sel').addEventListener('click', getPicture);
  document.querySelector('.img__arrow__link.img__arrow__link--right').addEventListener('click', function () {
    const url = document.querySelector('.img__feature-sel, .croppr-image').src;
    next(url);
  });
  document.querySelector('.img__arrow__link.img__arrow__link--left').addEventListener('click', function () {
    const url = document.querySelector('.img__feature-sel, .croppr-image').src;
    prev(url);
  });
  document.querySelector('.btn__header.btn__header--slide').addEventListener('click', randomPics);
});
