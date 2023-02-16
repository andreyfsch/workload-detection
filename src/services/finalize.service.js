const { featureSelection } = require('../models');

const { finalizePictue } = featureSelection;

const performAction = async (url) => {
  try {
    return await finalizePictue(url);
  } catch(e) {
    throw new Error(e.message);
  }
}

module.exports = {
    performAction
};