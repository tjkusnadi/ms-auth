const express = require('express');
const mongodb = require('mongodb');
const {
  db: dbConfig,
  http
} = require('../../config');
const { dbMiddleware } = require('../middlewares');
const routes = require('../routes');
const { errorHandler } = require('../utils');

const app = express();
const db = dbMiddleware(app, mongodb, dbConfig);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB Initialization
app.use(db);

//router initialization
routes(app);

//error handler
app.use(errorHandler);

app.listen(http.httpPort, () => console.log(`app running at http://localhost:${http.httpPort}`));