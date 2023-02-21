import services from '../services/index.js';
const { resetService } = services;

const analyze = async (req, res, next) => {
  const params = req.body
  try {
    let rawImage = await resetService.performAction(params.imageURL);
    if (rawImage) {
      res.status(200).send(JSON.stringify(rawImage));
    } else {
      res.status(204).send(JSON.stringify("Provided image is already raw."));
    }
    next();
  } catch (e) {
      console.log(e.message);
      res.sendStatus(500) && next(e);
  }
}

export default analyze;