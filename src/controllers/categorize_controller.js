import services from '../services/index.js';
const { categorizeService } = services;

const categorize = async (req, res, next) => {
  const params = req.body
  try {
      await categorizeService.performAction(...params);
      res.sendStatus(201);
      next();
  } catch (e) {
      console.log(e.message);
      res.sendStatus(500) && next(error);
  }
}

export default categorize;
