import { Router } from 'express';

import controllers from '../controllers/index.js';

const { picture, prev, next, analyze, categorize, finalize, reset } = controllers;

const router = Router();

router.get('/picture', picture);
router.post('/prev', prev);
router.post('/next', next);
router.post('/analyze', analyze);
router.post('/categorize', categorize);
router.post('/finalize', finalize);
router.post('/reset', reset);

export default router;