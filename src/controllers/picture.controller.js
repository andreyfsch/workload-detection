const { pictureService } = require('../services');

const { get } = require('./controller');

const picture = get(req, res, next, pictureService);

module.exports = {
    picture
};