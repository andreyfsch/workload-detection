import utils from "../utils/index.js";
const { sysOperations, dateOperations } = utils;
const { getPictureNameFromUrl,
   listRawImagesNames, isRawPicture } = sysOperations;
const { findPrevDate } = dateOperations;
import configs from "../configs/index.js";
const { fileStructure } = configs;
const { rawFrontend } = fileStructure;

async function prevImage(imageURL) {
  let imageName = getPictureNameFromUrl(imageURL);

  let checkRawImage = await isRawPicture(imageName);

  if (checkRawImage) {

    let rawPictureNames = await listRawImagesNames();

    let prevImage = findPrevDate(rawPictureNames, imageName);

    return rawFrontend + prevImage + ".jpg";
  
  } else return false;
}

const performAction = async (imageURL) => {
  try {
    return await prevImage(imageURL);
  } catch (e) {
    throw new Error(e.message);
  }
}

const prevService = {
  performAction: performAction
}

export default prevService;