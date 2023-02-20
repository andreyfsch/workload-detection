import services from '../services/index.js';
const { prevService } = services;

const prev = async (req, res, next) => {
  const params = req.body
  try {
      await prevService.performAction(...params);
      res.sendStatus(201);
      next();
  } catch (e) {
      console.log(e.message);
      res.sendStatus(500) && next(error);
  }
}

export default prev;