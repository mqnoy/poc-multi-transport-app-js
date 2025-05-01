const { serviceLocator } = require("@mqnoy/js-sl");
const express = require("express");
const bodyParser = require("body-parser");
const errorHandler = require("../middleware/errorHandler");

const setup = async () => {
  const app = express();

  app.use(bodyParser.json());

  /** @type {import('../recipe/transport/http/HttpTransport')} */
  const httpTransport = serviceLocator.get("httpTransport");

  app.use("/api/recipes", httpTransport.getRoutes());

  app.use(errorHandler);

  console.info(`initilized http app`);
  return app;
};

module.exports = {
  setup,
};
