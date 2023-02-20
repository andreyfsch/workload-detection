import express from 'express';
import pkg from 'body-parser';
const { json, urlencoded } = pkg;
const app = express();
import routes from './src/routes/index.js';

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('./src/', (req, res) => res.send('App is working'));

app.use('./src/routes', routes);

app.listen(3000, () => console.log('Feature selection API running on port 3000!'));

export default {
  app
};