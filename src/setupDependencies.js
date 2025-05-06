const initModels = require("./recipe/models");
const initRepositories = require("./recipe/repositories");
const initUseCases = require("./recipe/usecase");
const initTransports = require("./recipe/transport");
const { serviceLocator } = require("@mqnoy/js-sl");
const lolog = require("./utils/lolog");

const setupDependencies = async () => {
  serviceLocator.register("lolog", lolog);

  await initModels();
  await initRepositories();
  await initUseCases();
  await initTransports();
};

module.exports = setupDependencies;
