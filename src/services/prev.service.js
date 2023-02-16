const { featureSelection } = require('../models');

const { prevPictue } = featureSelection;

const performAction = async (subsequentUrl) => {
  try {
    return await prevPictue(subsequentUrl);
  } catch(e) {
    throw new Error(e.message);
  }
}

module.exports = {
    performAction
};