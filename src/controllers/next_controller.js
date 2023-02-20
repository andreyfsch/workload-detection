import services from '../services/index.js';
const { nextService } = services;

const next = async (req, res, next) => {
  const params = req.body
  try {
      await nextService.performAction(...params);
      res.sendStatus(201);
      next();
  } catch (e) {
      console.log(e.message);
      res.sendStatus(500) && next(error);
  }
}

export default next;