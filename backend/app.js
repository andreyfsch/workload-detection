import express from 'express';
import pkg from 'body-parser';
const { json, urlencoded } = pkg;
const app = express();
import routes from './src/routes/index.js';
import cors from 'cors';

app.use(json());
app.use(cors({ origin: '*'}));
app.use(express.static('../pictures'));

app.use(urlencoded({ extended: true }));

app.get('/', (_, res) => res.send('App running'));

app.use('/api', routes);

app.listen(3000, () => console.log('Feature selection API running on port 3000!'));

export default app;