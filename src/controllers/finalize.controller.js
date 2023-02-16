const { finalizeService } = require('../services');

const { post } = require('./controller');

const finalize = post(req, res, next, finalizeService);

module.exports = {
    finalize
};