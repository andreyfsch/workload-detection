import models from "../models/index.js";
const { featureSelection } = models;
const { randRawPicture } = featureSelection;
import configs from "../configs/index.js";
const { fileStructure } = configs;
const { rawFrontend } = fileStructure;

async function selectRandPic() {
  let pictureName = await randRawPicture();
  
  return rawFrontend + pictureName + ".jpg";
}

const performAction = async () => {
  try {
    return await selectRandPic();
  } catch (e) {
    throw new Error(e.message);
  }
}

const pictureService = {
  performAction: performAction
}

export default pictureService;