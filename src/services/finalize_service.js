import utils from "../utils/index.js";
const { sysOperations } = utils;
const { getPictureNameFromUrl, moveFilesDone } = sysOperations;


async function finalize(imageURL) {
  try {
    let imageName = getPictureNameFromUrl(imageURL);
    moveFilesDone(imageName);
  } catch (e) {
    throw e;
  }
}

const performAction = async () => {
  try {
    return await finalize(imageURL);
  } catch (e) {
    throw new Error(e.message);
  }
}

export default performAction;