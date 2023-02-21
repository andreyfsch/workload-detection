import utils from "../utils/index.js";
const { sysOperations } = utils;
const { getPictureNameFromUrl, moveFilesDone,
   isAnalyzePicture } = sysOperations;
import configs from "../configs/index.js";
const { fileStructure } = configs;
const { doneImages } = fileStructure;

async function finalize(imageURL) {
  try {
    let imageName = getPictureNameFromUrl(imageURL);

    let checkAnalyzeImage = await isAnalyzePicture(imageName);

    if (checkAnalyzeImage) {
      
      let success = await moveFilesDone(imageName);

      if (success) {
        return doneImages + imageName + ".jpg";
      } else {
        return false;
      }
    } else return false;
  }  catch (e) {
    throw e;
  }
}

const performAction = async (imageURL) => {
  try {
    return await finalize(imageURL);
  } catch (e) {
    throw new Error(e.message);
  }
}

const finalizeService = {
  performAction: performAction
}

export default finalizeService;