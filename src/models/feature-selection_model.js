import utils from "../utils/index.js";
const { sysOperations, imgOperations } = utils;
const { convertFeatureProps } = imgOperations;
const { listRawImagesNames } = sysOperations

const randRawPicture = () => {
  try {
    let rawImagesNames = listRawImagesNames();
    let randomKey = Math.floor(Math.random() * rawImagesNames.length);
    let randomImage = rawImagesNames[randomKey];

    return randomImage;
  } catch (e) {
    console.log(`An error occoured while getting a random picture: ${e.message}`);
  }
}

const generateFeatureLine = (imagePath, featureObj, featureType) => {
  let normalizedFeature = convertFeatureProps(imagePath, featureObj);

  return `${featureType} ${normalizedFeature.x} ${normalizedFeature.y} ${normalizedFeature.width} ${normalizedFeature.height}`;
};

const featureSelection = {
  randRawPicture: randRawPicture,
  generateFeatureLine: generateFeatureLine
};

export default featureSelection;