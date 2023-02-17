import { sysOperations, dateOperations } from "../utils";
const { getPictureNameFromUrl } = sysOperations;
const { findNextDate } = dateOperations;
import { fileStructure } from "../config";
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

export default {
  performAction
};