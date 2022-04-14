const express = require('express');
const { default: helmet } = require('helmet');
const { APP_PORT } = require('./lib/config');
const authentication = require('./middlewares/authentication');
const routes = require('./routes');

const app = express();

// middlewares setup
app.use(helmet());
app.use(express.json());
app.use(authentication);

// route setup
app.use('/health', (_req, res) => res.send('OK'));
app.use('/orgs', routes)

app.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`);
});

module.exports = app;
