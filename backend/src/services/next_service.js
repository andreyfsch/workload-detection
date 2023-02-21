import utils from "../utils/index.js";
const { sysOperations, dateOperations } = utils;
const { getPictureNameFromUrl, listRawImagesNames, isRawPicture } = sysOperations;
const { findNextDate } = dateOperations;
import configs from "../configs/index.js";
const { fileStructure } = configs;
const { rawImages } = fileStructure;

async function nextImage(imageURL) {
  let imageName = getPictureNameFromUrl(imageURL);

  let checkRawImage = await isRawPicture(imageName);

  if (checkRawImage) {

    let rawPictureNames = await listRawImagesNames();

    let nextImage = findNextDate(rawPictureNames, imageName);

    return rawImages + nextImage + ".jpg";
  
  } else return false;
}

const performAction = async (imageURL) => {
  try {
    return await nextImage(imageURL);
  } catch (e) {
    throw new Error(e.message);
  }
}

const nextService = {
  performAction: performAction
}

export default nextService;