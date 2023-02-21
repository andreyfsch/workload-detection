import models from "../models/index.js";
const { featureSelection } = models;
const { randRawPicture } = featureSelection;
import configs from "../configs/index.js";
const { fileStructure } = configs;
const { rawImages } = fileStructure;

async function selectRandPic() {
  let pictureName = await randRawPicture();
  
  return rawImages + pictureName + ".jpg";
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