import { Router } from 'express';

const controllers = import('../controllers/index.js').default;

// const { picture, categorize, finalize, prev, next } = controllers;

console.log(controllers);

const router = Router();

router.get('/picture', picture);
router.post('/categorize', categorize);
router.post('/finalize', finalize);
router.post('/prev', prev);
router.post('/next', next);

export default router;