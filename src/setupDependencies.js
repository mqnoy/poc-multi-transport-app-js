const initModels = require("./recipe/models");
const initRepositories = require("./recipe/repositories");
const initUseCases = require("./recipe/usecase");
const initTransports = require("./recipe/transport");

const setupDependencies = async () => {
  await initModels();
  await initRepositories();
  await initUseCases();
  await initTransports();
};

module.exports = setupDependencies;
