const { nextService } = require('../services');

const { post } = require('./controller');

const next = post(req, res, next, nextService);

module.exports = {
    next
};