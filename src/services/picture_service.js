import models from "../models/index.js";
const { featureSelection } = models;
const { randRawPicture } = featureSelection;
import utils from "../utils/index.js";
const { sysOperations } = utils;
const { movePicAnalyze, createLabel } = sysOperations;
import configs from "../configs/index.js";
const { fileStructure } = configs;
const { analyzeImages } = fileStructure;

async function selectAndAnalyze() {
  let pictureName = randRawPicture();
  movePicAnalyze(pictureName);
  createLabel(pictureName);

  return analyzeImages + pictureName + ".jpg";
}

const performAction = async () => {
  try {
    return await selectAndAnalyze();
  } catch (e) {
    throw new Error(e.message);
  }
}

export default performAction;