const config = require('./utils/config')
const express = require('express')
const app = express()
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./controllers/users')
const pinsRouter = require('./controllers/pins')

logger.info(`Connecting to ${config.MONGODB_URI}`)

mongoose
  .connect(config.MONGODB_URI, {
  })
  .then(() => {
    logger.info('connected to mongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to mongoDB', error.message);
  });

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/pins", pinsRouter);

module.exports = app;
