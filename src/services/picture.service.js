const { featureSelection } = require('../models');

const { randPicture } = featureSelection;

const performAction = async () => {
  try {
    return await randPicture();
  } catch(e) {
    throw new Error(e.message);
  }
}

module.exports = {
    performAction
};