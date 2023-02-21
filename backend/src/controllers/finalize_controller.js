import services from '../services/index.js';
const { finalizeService } = services;

const finalize = async (req, res, next) => {
  const params = req.body
  try {
      let doneImage = await finalizeService.performAction(params.imageURL);
      if (doneImage) {
        res.status(200).send(JSON.stringify(doneImage));
      } else {
        res.status(204).send(JSON.stringify("Provided image is not under analysis."));
      }
      next();
  } catch (e) {
      console.log(e.message);
      res.sendStatus(500) && next(e);
  }
}

export default finalize;