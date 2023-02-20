import services from '../services/index.js';
const { finalizeService } = services;

const finalize = async (req, res, next) => {
  const params = req.body
  try {
      await finalizeService.performAction(...params);
      res.sendStatus(201);
      next();
  } catch (e) {
      console.log(e.message);
      res.sendStatus(500) && next(error);
  }
}

export default finalize;