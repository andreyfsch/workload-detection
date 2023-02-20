import fs from "fs";
import configs from "../configs/index.js";
const { fileStructure } = configs;
const { rawImages, analyzeImages, doneImages,
  analyzeLabels, doneLabels } = fileStructure;

const filesInFolder = (folder) => {
  let listOfFiles = [];
  fs.readdir(folder, (err, files) => {
    if (err) throw err;
    else listOfFiles = files;
  });

  return listOfFiles;
};

const listRawImagesNames = () => {
  try {
    let listOfRawImages = filesInFolder(rawImages).forEach(
      i => i.replace(/\.[^/.]+$/, ""));

    return listOfRawImages;
  } catch (e) {
    throw e;
  }
};

const movePicAnalyze = (pictureName) => {
  let picture = pictureName + ".jpg";
  let oldPath = rawImages + picture;
  let newPath = analyzeImages + picture;

  fs.rename(oldPath, newPath, function (err) {
    if (err) throw err;
    else {
      console.log(`analyzing ${picture}`);
      return 1;
    };
  });
};

const createLabel = (pictureName) => {
  let labelName = pictureName + ".txt";
  let labelPath = analyzeLabels + labelName;

  fs.closeSync(fs.openSync(labelPath, 'w'));
};

const moveFilesDone = (pictureName) => {
  let picturePath = analyzeImages + pictureName + ".jpg";
  let labelPath = analyzeLabels + pictureName + ".txt";
  let newPicturePath = doneImages + pictureName + ".jpg";
  let newLabelPath = doneLabels + pictureName + ".txt";

  fs.rename(picturePath, newPicturePath, function (err) {
    if (err) throw err;
    else console.log(`${pictureName} image done`);
  });

  fs.rename(labelPath, newLabelPath, function (err) {
    if (err) throw err;
    else console.log(`${pictureName} label done`);
  });
};

const writeFeatureLabel = (pictureName, newLine) => {
  let labelPath = analyzeLabels + pictureName + ".txt";

  fs.appendFile(labelPath, newLine, function (err) {
    if (err) throw err;
    else console.log(`feature added to ${pictureName}`);
  });
};

const getPictureNameFromUrl = (picturePath) => {
  let pathNodes = picturePath.split("/");
  let pictureFile = pathNodes.pop();
  let pictureName = pictureFile.split(".").shift();

  return pictureName;
};

const sysOperations = {
  listRawImagesNames: listRawImagesNames,
  movePicAnalyze: movePicAnalyze,
  createLabel: createLabel,
  moveFilesDone: moveFilesDone,
  writeFeatureLabel: writeFeatureLabel,
  getPictureNameFromUrl: getPictureNameFromUrl
};

export default sysOperations;