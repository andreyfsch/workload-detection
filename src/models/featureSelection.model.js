const randomFile = require("select-random-file");
const { features, fileStructure } = require("../config");
const { analyzeImages, analyzeLables, doneImages,
     doneLables, rawImages } = fileStructure;

export const randPicture = () => {
    return randomFile(rawImages, (err, file) => {
        return rawImages + file;
    });
}