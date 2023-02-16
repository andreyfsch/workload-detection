const { prevService } = require('../services');

const { post } = require('./controller');

const prev = post(req, res, next, prevService);

module.exports = {
    prev
};