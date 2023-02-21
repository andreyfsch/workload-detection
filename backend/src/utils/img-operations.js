import sizeOf from "image-size";

const getImageSize = (imagePath) => {
  let {width, height} = sizeOf(imagePath);

  return {width, height};
};

const convertFeatureProps = (imagePath, featureObj) => {
  let { width:imageWidth, height:imageHeight } = getImageSize(imagePath);

  let correctFeatureObjs;

  for (const property in featureObj) {
    correctFeatureObjs =  { ...correctFeatureObjs, [property]: parseInt(featureObj[property]) };
  }

  let { x:featureX, y:featureY,
    width:featureWidth, height:featureHeight } = correctFeatureObjs;

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

const imgOperations = {
  convertFeatureProps: convertFeatureProps
};

export default imgOperations;