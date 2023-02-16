const { featureSelection } = require('../models');

const { nextPictue } = featureSelection;

const performAction = async (previousUrl) => {
  try {
    return await nextPictue(previousUrl);
  } catch(e) {
    throw new Error(e.message);
  }
}

module.exports = {
    performAction
};