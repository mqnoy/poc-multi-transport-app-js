const { serviceLocator } = require("@mqnoy/js-sl");
const express = require("express");
const bodyParser = require("body-parser");
const errorHandler = require("../middleware/errorHandler");
const requestIdHandler = require("../middleware/requestIdHandler");
const loggingHandler = require("../middleware/loggingHandler");

const setup = async () => {
  const app = express();

  const lolog = serviceLocator.get("lolog");
  app.use(loggingHandler(lolog));

  app.use(requestIdHandler);

  app.use(bodyParser.json());

  /** @type {import('../recipe/transport/http/HttpTransport')} */
  const httpTransport = serviceLocator.get("httpTransport");

  app.use("/api/recipes", httpTransport.getRoutes());

  app.use(errorHandler(lolog));

  console.info(`initilized http app`);
  return app;
};

module.exports = {
  setup,
};
