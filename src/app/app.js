const setupDependencies = require("../setupDependencies");
const appHttp = require("./http");
const appGrpc = require("./grpc");

const App = async () => {
  await setupDependencies();

  console.info(`initilize app`);

  return {
    http: await appHttp.setup(),
    grpc: appGrpc,
  };
};

module.exports = App;
