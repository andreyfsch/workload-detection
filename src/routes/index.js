const express = require('express');

const { categorize, finalize, next, picture, prev } = require('../controllers');

const router = express.Router();

router.post('/picture', picture.performAction);
router.post('/categorize', categorize.performAction);
router.post('/finalize', finalize.performAction);
router.post('/prev', prev.performAction);
router.post('/next', next.performAction);

module.exports = router;