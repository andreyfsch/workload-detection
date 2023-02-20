import services from '../services/index.js';
const { pictureService } = services;

const picture = async (req, res, next) => {
  const params = req.query;
  try {
      await pictureService.performAction(...params);
      res.sendStatus(201);
      next();
  } catch (e) {
      console.log(e.message);
      res.sendStatus(500) && next(error);
  }
}

export default picture;