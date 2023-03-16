var systemStructure = {
  home: "/home/andrey/",
  project: "workload-detection/",
  pictures: "pictures/",
};

const { home, project, pictures } = systemStructure;

var picturesFolder = home + project + pictures;

var stagesStructure = {
  root: picturesFolder,
  raw: picturesFolder + "raw/",
  analyze: picturesFolder + "analyze/",
  done: picturesFolder + "done/",
};

var frontendStructure = {
  raw: "/raw/",
  analyze: "/analyze/",
  done: "/done/",
}

const { root, raw, analyze, done } = stagesStructure;

const { raw: rawFrontend, analyze: analyzeFrontend, done: doneFrontend } = frontendStructure;

const [images, labels] = ["images/", "labels/"];

const fileStructure = {
  root: root,
  analyzeImages: analyze + images,
  analyzeLabels: analyze + labels,
  doneImages: done + images,
  doneLabels: done + labels,
  rawImages: raw,
  rawFrontend: rawFrontend,
  analyzeImagesFrontend: analyzeFrontend + images,
  doneImagesFrontend: doneFrontend + images,
};

export default fileStructure;