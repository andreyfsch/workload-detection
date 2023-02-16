const { featureSelection } = require('../models');

const { selectFeature } = featureSelection;

const performAction = async (url, feature) => {
  try {
    return await selectFeature(url, feature);
  } catch(e) {
    throw new Error(e.message);
  }
}

module.exports = {
    performAction
};