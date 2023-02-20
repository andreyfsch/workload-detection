import utils from "../utils/index.js";
const { sysOperations, dateOperations } = utils;
const { getPictureNameFromUrl } = sysOperations;
const { findPrevDate } = dateOperations;
import configs from "../configs/index.js";
const { fileStructure } = configs;
const { rawImages } = fileStructure;

async function prevImage(imageURL) {
  let imageName = getPictureNameFromUrl(imageURL);
  let prevImage = findPrevDate(imageName);

  return rawImages + prevImage + ".jpg";
}

const performAction = async () => {
  try {
    return await prevImage(imageURL);
  } catch (e) {
    throw new Error(e.message);
  }
}

export default performAction;