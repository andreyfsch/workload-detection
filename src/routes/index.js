const express = require('express');

const { categorize, finalize, next, picture, prev } = require('../controllers');

const router = express.Router();

router.get('/picture', picture);
router.post('/categorize', categorize);
router.post('/finalize', finalize);
router.post('/prev', prev);
router.post('/next', next);

module.exports = router;