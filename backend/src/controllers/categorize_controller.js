import services from '../services/index.js';
const { categorizeService } = services;

const categorize = async (req, res, next) => {
  const params = req.body
  try {
      let confirmation = await categorizeService.performAction(params.imageURL,
        params.featureObj, params.featureType);
      if (confirmation) {
        res.status(200).send(JSON.stringify(params.imageURL));
      } else {
        res.status(204).send(JSON.stringify("Provided image is not under analysis."));
      }
      next();
  } catch (e) {
      console.log(e.message);
      res.sendStatus(500) && next(e);
  }
}

export default categorize;
