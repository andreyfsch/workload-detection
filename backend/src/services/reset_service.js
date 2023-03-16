import utils from "../utils/index.js";
const { sysOperations } = utils;
const { movePicRaw, getPictureNameFromUrl,
   destroyLabel, isRawPicture } = sysOperations;
import configs from "../configs/index.js";
const { fileStructure } = configs;
const { rawFrontend } = fileStructure;

async function resetPicture(imageURL) {
  try {

    let pictureName = getPictureNameFromUrl(imageURL);

    let checkRawImage = await isRawPicture(pictureName);

    if (!checkRawImage) {

      movePicRaw(imageURL);

      destroyLabel(imageURL);

      return rawFrontend + pictureName + ".jpg";
    
    } else return false;
  } catch (e) {
    throw e;
  }
}

const performAction = async (imageURL) => {
  try {
    return await resetPicture(imageURL);
  } catch (e) {
    throw new Error(e.message);
  }
}

const resetService = {
  performAction: performAction
}

export default resetService;