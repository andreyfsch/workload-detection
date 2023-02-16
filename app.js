const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('src/', (req, res) => res.send('App is working'));

app.use('src/routes', routes);

app.listen(3000, () => console.log('Feature selection API running on port 3000!'));

module.exports = {
    app
};