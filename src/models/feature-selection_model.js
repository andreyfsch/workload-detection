const { sysOperations, imgOperations } = require("../utils");
const { convertFeatureProps } = imgOperations;

export const randRawPicture = () => {
  try {
    let rawImagesNames = sysOperations.listRawImagesNames();
    let randomKey = Math.floor(Math.random() * rawImagesNames.length);
    let randomImage = rawImagesNames[randomKey];

    return randomImage;
  } catch (e) {
    console.log(`An error occoured while getting a random picture: ${e.message}`);
  }
}

export const generateFeatureLine = (imagePath, featureObj, featureType) => {
  let normalizedFeature = convertFeatureProps(imagePath, featureObj);

  return `${featureType} ${normalizedFeature.x} ${normalizedFeature.y} ${normalizedFeature.width} ${normalizedFeature.height}`;
};
