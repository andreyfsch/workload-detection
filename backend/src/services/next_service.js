import utils from "../utils/index.js";
const { sysOperations, dateOperations } = utils;
const { getPictureNameFromUrl } = sysOperations;
const { findNextDate } = dateOperations;
import configs from "../configs/index.js";
const { fileStructure } = configs;
const { rawImages } = fileStructure;

async function nextImage(imageURL) {
  let imageName = getPictureNameFromUrl(imageURL);
  let nextImage = findNextDate(imageName);

  return rawImages + nextImage + ".jpg";
}

const performAction = async () => {
  try {
    return await nextImage(imageURL);
  } catch (e) {
    throw new Error(e.message);
  }
}

export default performAction;