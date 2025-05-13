const initRepositories = require("./recipe/repositories");
const initUseCases = require("./recipe/usecase");
const initTransports = require("./recipe/transport");

const setupDependencies = async () => {
  await initRepositories();
  await initUseCases();
  await initTransports();
};

module.exports = setupDependencies;
