import services from '../services/index.js';
const { analyzeService } = services;

const analyze = async (req, res, next) => {
  const params = req.body
  try {
    let analyzedImage = await analyzeService.performAction(params.imageURL);
    if (analyzedImage) {
      res.status(200).send(JSON.stringify(analyzedImage));
    } else {
      res.status(204).send(JSON.stringify("Provided image is not raw."));
    }
    next();
  } catch (e) {
      console.log(e.message);
      res.sendStatus(500) && next(e);
  }
}

export default analyze;