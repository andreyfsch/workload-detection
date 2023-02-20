import models from "../models/index.js";
const { featureSelection } = models;
const { generateFeatureLine } = featureSelection;
import utils from "../utils/index.js";
const { sysOperations } = utils;
const { writeFeatureLabel } = sysOperations;


async function insertFeature(imageUrl, featureObj, featureType) {
  try {
    let featureLine = generateFeatureLine(imageUrl, featureObj, featureType);
    writeFeatureLabel(pictureName, featureLine);
  } catch (e) { throw e; }
}

const performAction = async (imageUrl, featureObj, featureType) => {
  try {
    return await insertFeature(imageUrl, featureObj, featureType);
  } catch (e) {
    throw new Error(e.message);
  }
}

export default performAction;