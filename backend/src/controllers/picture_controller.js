import services from '../services/index.js';
const { pictureService } = services;

const picture = async (_, res, next) => {
  try {
      let randImage = await pictureService.performAction();
      res.status(200).send(JSON.stringify(randImage));
      next();
  } catch (e) {
      console.log(e.message);
      res.sendStatus(500) && next(e);
  }
}

export default picture;