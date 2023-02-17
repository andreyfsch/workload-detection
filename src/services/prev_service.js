import { sysOperations, dateOperations } from "../utils";
const { getPictureNameFromUrl } = sysOperations;
const { findPrevDate } = dateOperations;
import { fileStructure } from "../config";
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

export default {
  performAction
};