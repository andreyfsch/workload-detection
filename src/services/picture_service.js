import { featureSelection } from "../models";
const { randRawPicture } = featureSelection;
import { sysOperations } from "../utils";
const { movePicAnalyze, createLabel } = sysOperations;
import { fileStructure } from "../config";
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

export default {
  performAction
};