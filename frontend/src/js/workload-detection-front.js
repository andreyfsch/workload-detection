import config from './configs/index.js';
import AJAX from './helper.js';

const fadeIn = function (element, duration = 600) {
  element.style.display = '';
  element.style.opacity = 0;
  var last = +new Date();
  var tick = function() {
    element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
    last = +new Date();
    if (+element.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };
  tick();
}

const getNewPic = async function () {
  try {
    const data = await AJAX(config.API_URL+config.API_OPTIONS.PICTURE, 'GET');
    return data;
  } catch (err) {
    console.log(err);
  }
}

const getPicture = async function () {

    let svg = document.querySelector('.img__feature-sel');
    svg.classList.add('img__feature-sel--loading');
    let newImg = document.createElement('img');
    let parent = svg.parentNode;
    let loadedImage = new Image();
    loadedImage.onload = function () {
      newImg.src = this.src;
      newImg.classList.add('img__feature-sel');
      parent.replaceChild(newImg, svg);
      fadeIn(newImg);
    };
    const data = await getNewPic();
    loadedImage.src = config.API_IMAGES+data;

};

const newPicture = function (url) {
  if (url) {
    let image = document.querySelector('.img__feature-sel');
    image.classList.add('img__feature-sel--loading');
    let newImg = new Image();
    newImg.onload = function () {
      image.src = this.src;
      fadeIn(image);
    }
    newImg.src = config.API_IMAGES+url;
  }
};

const next  = async function (url) {
  try {
    const data = await AJAX(config.API_URL+config.API_OPTIONS.NEXT, 'POST', {imageURL: url});
    newPicture(data);
  } catch (err) {
    console.log(err);
  }
}

const prev  = async function (url) {
  try {
    const data = await AJAX(config.API_URL+config.API_OPTIONS.PREV, 'POST', {imageURL: url});
    newPicture(data);
  } catch (err) {
    console.log(err);
  }
}

const sleep = function (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const randomPics = function () {
    let newUrl = getNewPic().then(() => {sleep(1000); randomPics();});
    newPicture(newUrl);
    console.log(newUrl);
}

window.onload = function () {
  document.querySelector('.img__feature-sel').addEventListener('click', getPicture);
  document.querySelector('.img__arrow__link.img__arrow__link--right').addEventListener('click', function () {
    let url = document.querySelector('.img__feature-sel').src;
    next(url);
  });
  document.querySelector('.img__arrow__link.img__arrow__link--left').addEventListener('click', function () {
    let url = document.querySelector('.img__feature-sel').src;
    prev(url);
  });
  document.querySelector('.btn__header.btn__header--slide').addEventListener('click', randomPics);
};
