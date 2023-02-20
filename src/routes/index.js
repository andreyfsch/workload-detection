import { Router } from 'express';

import controllers from '../controllers/index.js';

const { picture, categorize, finalize, prev, next } = controllers;

const router = Router();

router.get('/picture', picture);
router.post('/categorize', categorize);
router.post('/finalize', finalize);
router.post('/prev', prev);
router.post('/next', next);

export default router;