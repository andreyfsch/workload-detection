const fs = require("fs");

export const listAll = (folder) => {
    var filesInFolder;
    fs.readdir(folder, (err, files) => {
        if (err) {
            console.log(err);
        } else {
            filesInFolder = files;
        }
    });

    return filesInFolder;
};