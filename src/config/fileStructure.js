var systemStructure = {
    home: "/home/andrey/",
    project: "workload-detection/",
    pictures: "pictures/"
};

const { home, project, pictures } = systemStructure;

var picturesFolder = home + project + pictures;

var stagesStructure = {
    raw:  picturesFolder + "raw/",
    analyze: picturesFolder + "analyze/",
    done:  picturesFolder + "done/",
};

const { raw, analyze, done } = stagesStructure;

const [images, lables] = ["images/", "lables/"];

var fileStructure = {
    analyzeImages: analyze + images,
    analyzeLables: analyze + lables,
    doneImages: done + images,
    doneLables: done + lables,
    rawImages: raw
};

exports.fileStructure = fileStructure;