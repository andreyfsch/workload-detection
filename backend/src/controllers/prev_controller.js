import services from '../services/index.js';
const { prevService } = services;

const prev = async (req, res, next) => {
  const params = req.body
  try {
      let prevImage = await prevService.performAction(params.imageURL);
      if (prevImage) {
        res.status(200).send(JSON.stringify(prevImage));
      } else {
        res.status(204).send(JSON.stringify("Provided image is not raw."));
      }
      next();
  } catch (e) {
      console.log(e.message);
      res.sendStatus(500) && next(e);
  }
}

export default prev;