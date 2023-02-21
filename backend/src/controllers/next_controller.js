import services from '../services/index.js';
const { nextService } = services;

const next = async (req, res, next) => {
  const params = req.body
  try {
      let nextImage = await nextService.performAction(params.imageURL);
      if (nextImage) {
        res.status(200).send(JSON.stringify(nextImage));
      } else {
        res.status(204).send(JSON.stringify("Provided image is not raw."));
      }
      next();
  } catch (e) {
      console.log(e.message);
      res.sendStatus(500) && next(e);
  }
}

export default next;