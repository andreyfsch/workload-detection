const sizeOfImg = require("image-size");

const getImageSize = (imagePath) => {
  let imgSize = {};
  sizeOfImg(imagePath, function (err, dimentions) {
    if (err) throw err;
    else imgSize = {
      width: dimentions.width,
      height: dimentions.height
    };
  });

  return imgSize;
};

export const convertFeatureProps = (imagePath, featureObj) => {
  let { imageWidth, imageHeight } = getImageSize(imagePath);
  let { featureX, featureY,
    featureWidth, featureHeight } = featureObj;

  let centeredFeatureX = featureX + (featureWidth / 2);
  let ratioFeatureX = centeredFeatureX / imageWidth;
  let normalizedFeatureX = ratioFeatureX.toPrecision(17);

  let inverseFeatureY = imageHeight - featureY;
  let centeredFeatureY = inverseFeatureY + (featureHeight / 2);
  let ratioFeatureY = centeredFeatureY / imageHeight;
  let normalizedFeatureY = ratioFeatureY.toPrecision(17);

  let ratioFeatureWidth = featureWidth / imageWidth;
  let normalizedFeatureWidth = ratioFeatureWidth.toPrecision(17);

  let ratioFeatureHeight = featureHeight / imageHeight;
  let normalizedFeatureHeight = ratioFeatureHeight.toPrecision(17);

  return {
    x: normalizedFeatureX, y: normalizedFeatureY,
    width: normalizedFeatureWidth, height: normalizedFeatureHeight
  };
};