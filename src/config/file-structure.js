var systemStructure = {
  home: "/home/andrey/",
  project: "workload-detection/",
  pictures: "pictures/"
};

const { home, project, pictures } = systemStructure;

var picturesFolder = home + project + pictures;

var stagesStructure = {
  raw: picturesFolder + "raw/",
  analyze: picturesFolder + "analyze/",
  done: picturesFolder + "done/",
};

const { raw, analyze, done } = stagesStructure;

const [images, labels] = ["images/", "labels/"];

var fileStructure = {
  analyzeImages: analyze + images,
  analyzeLabels: analyze + labels,
  doneImages: done + images,
  doneLables: done + labels,
  rawImages: raw
};

exports.fileStructure = fileStructure;