import fs from "fs";
import configs from "../configs/index.js";
const { fileStructure } = configs;
const { root, rawImages, analyzeImages, doneImages,
  analyzeLabels, doneLabels } = fileStructure;

const filesInFolder = async (folder) => {
  let listOfFiles = [];

  await new Promise (done => fs.readdir(folder, (err, files) => {
    if (err) throw err;
    else {
      listOfFiles = files;
    }
      done();
  }));
  
  return listOfFiles;
};

const listRawImagesNames = async () => {
  try {
    let listOfRawImages = await filesInFolder(rawImages);
    let finalList = listOfRawImages.map(i => i.replace(/\.[^/.]+$/, ""));

    return finalList;
  } catch (e) {
    throw e;
  }
};

const movePicAnalyze = async (pictureName) => {
  let picture = pictureName + ".jpg";

  let oldPath = rawImages + picture;

  let newPath = analyzeImages + picture;

  let success = false;

  let returnValue;

  await new Promise (done => fs.rename(oldPath, newPath, function (err) {
    if (err) throw err;
    else {
      // console.log(`analyzing ${picture}`);
      success = true;
    };
    done();
  }));

  if (success) {
    returnValue = newPath;
  } else {
    returnValue = false;
  }

  return returnValue;
};

const isAnalyzePicture = async (pictureName) => {
  let picture = pictureName + ".jpg";
  
  let analyzePath = analyzeImages + picture;

  let fileExists;

  await new Promise (done => fs.access(analyzePath, fs.constants.F_OK, (err) => {
    if (err) {
      fileExists = false;
    }
    else {
      fileExists = true;
    }
    done();
  }));

  return fileExists;
};

const isRawPicture = async (pictureName) => {
  let picture = pictureName + ".jpg";
  
  let rawPath = rawImages + picture;

  let fileExists;

  await new Promise (done => fs.access(rawPath, fs.constants.F_OK, (err) => {
    if (err) {
      fileExists = false;
    }
    else {
      fileExists = true;
    }
      done();
  }));

  return fileExists;
}


const movePicRaw = async (pictureURL) => {
  let pictureName = getPictureNameFromUrl(pictureURL);

  let newPath = rawImages + pictureName + ".jpg";

  let success = false;

  let returnValue;

  await new Promise (done => fs.rename(pictureURL, newPath, (err) => {
    if (err) {throw err;}
    else {
      // console.log(`resetting ${pictureName}`);
      success = true;
    };
    done();
  }));

  if (success) {
    returnValue = newPath;
  } else {
    returnValue = false;
  }

  return returnValue;
};

const createLabel = (pictureName) => {
  let labelName = pictureName + ".txt";
  let labelPath = analyzeLabels + labelName;

  fs.closeSync(fs.openSync(labelPath, 'w'));
};

const destroyLabel = async (pictureURL) => {
  let pictureName = getPictureNameFromUrl(pictureURL);
  let labelName = pictureName + ".txt";
  let labelPath = getLabelDir(pictureURL);
  let success;

  await new Promise (done => fs.unlink(labelPath + labelName, (err) => {
    if (err) {
      success = false;
    }
    else {
      success = true;
      // console.log(`unsetting ${pictureName} label`);
    };
    done();
  }));

  return success;
};

const moveFilesDone = async (pictureName) => {
  let picturePath = analyzeImages + pictureName + ".jpg";
  let labelPath = analyzeLabels + pictureName + ".txt";
  let newPicturePath = doneImages + pictureName + ".jpg";
  let newLabelPath = doneLabels + pictureName + ".txt";
  let picSuccess;
  let labelSuccess;

  await new Promise (done => fs.rename(picturePath, newPicturePath, (err) => {
    if (err) {
      picSuccess = false;
    }
    else {
      picSuccess = true;
      // console.log(`${pictureName} marked as done`);
    };
    done();
  }));

  await new Promise (done => fs.rename(labelPath, newLabelPath, (err) => {
    if (err) {
      labelSuccess = false;
    }
    else {
      labelSuccess = true;
      // console.log(`${pictureName} label marked as done`);
    };
    done();
  }));

  return picSuccess && labelSuccess;
};

const writeFeatureLabel = async (pictureName, newLine) => {
  let labelPath = analyzeLabels + pictureName + ".txt";
  let writeSuccess;

  await new Promise (done => fs.appendFile(labelPath, newLine, (err) => {
    if (err) {
      writeSuccess = false;
    }
    else {
      writeSuccess = true;
      // console.log(`feature added to ${pictureName}`);
    };
    done();
  }));

  return writeSuccess;
};

const getPictureNameFromUrl = (picturePath) => {
  let pathNodes = picturePath.split("/");
  let pictureFile = pathNodes.pop();
  let pictureName = pictureFile.split(".").shift();

  return pictureName;
};

const getLabelDir = (picturePath) => {
  let pathNodes = picturePath.split("/");
  pathNodes.pop();
  pathNodes.pop();
  let currentDir = pathNodes.pop();
  
  return root + "/" + currentDir + "/" + "labels/";
};

const sysOperations = {
  listRawImagesNames: listRawImagesNames,
  isAnalyzePicture: isAnalyzePicture,
  isRawPicture: isRawPicture,
  movePicAnalyze: movePicAnalyze,
  movePicRaw: movePicRaw,
  createLabel: createLabel,
  destroyLabel: destroyLabel,
  moveFilesDone: moveFilesDone,
  writeFeatureLabel: writeFeatureLabel,
  getPictureNameFromUrl: getPictureNameFromUrl
};

export default sysOperations;