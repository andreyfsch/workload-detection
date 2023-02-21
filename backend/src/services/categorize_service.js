import models from "../models/index.js";
const { featureSelection } = models;
const { generateFeatureLine } = featureSelection;
import utils from "../utils/index.js";
const { sysOperations } = utils;
const { writeFeatureLabel, isAnalyzePicture, getPictureNameFromUrl } = sysOperations;


async function insertFeature(imageURL, featureJson, featureType) {
  try {
    let imageName = getPictureNameFromUrl(imageURL);
    let checkRawImage = await isAnalyzePicture(imageName);
    let featureObj = JSON.parse(featureJson);

    if (checkRawImage) {
      let featureLine = generateFeatureLine(imageURL, featureObj, featureType);

      writeFeatureLabel(imageName, featureLine);

      return true;
    } else return false;
  }  catch (e) {
    throw e;
  }
}

const performAction = async (imageURL, featureJson, featureType) => {
  try {
    return await insertFeature(imageURL, featureJson, featureType);
  } catch (e) {
    throw new Error(e.message);
  }
}

const categorizeService = {
  performAction: performAction
}

export default categorizeService;