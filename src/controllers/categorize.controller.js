const { categorizeService } = require('../services');

const { post } = require('./controller');

const categorize = post(req, res, next, categorizeService);

module.exports = {
    categorize
};
