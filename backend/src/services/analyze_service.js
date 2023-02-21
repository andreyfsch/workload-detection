import utils from "../utils/index.js";
const { sysOperations } = utils;
const { movePicAnalyze, createLabel,
   isRawPicture, getPictureNameFromUrl } = sysOperations;
import configs from "../configs/index.js";
const { fileStructure } = configs;
const { analyzeImages } = fileStructure;

async function analyzePicture(imageURL) {
  try {
    let pictureName = getPictureNameFromUrl(imageURL);

    let checkRawImage = await isRawPicture(pictureName);

    if (checkRawImage) {
      
      movePicAnalyze(pictureName);

      createLabel(pictureName);

      return analyzeImages + pictureName + ".jpg";
    
    } else return false;
  } catch(e){
    throw e;
  }
}

const performAction = async (imageURL) => {
  try {
    return await analyzePicture(imageURL);
  } catch (e) {
    throw new Error(e.message);
  }
}

const analyzeService = {
  performAction: performAction
}

export default analyzeService;