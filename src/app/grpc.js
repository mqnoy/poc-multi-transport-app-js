const { serviceLocator } = require("@mqnoy/js-sl");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const { ReflectionService } = require("@grpc/reflection");

const setup = async () => {
  const packageDefinition = protoLoader.loadSync(
    [__dirname + "/../proto/recipe.proto", __dirname + "/../proto/user.proto"],
    {}
  );
  const grpcObject = grpc.loadPackageDefinition(packageDefinition);
  const grpcServer = new grpc.Server();

  // add reflection
  const reflection = new ReflectionService(packageDefinition);
  reflection.addToServer(grpcServer);

  /** @type {import('../recipe/transport/grpc/GrpcTransport')} */
  const grpcTransport = serviceLocator.get("grpcTransport");

  // TODO: add support with interceptor eg: auth, error handler

  grpcServer.addService(
    grpcObject.recipe.RecipeService.service,
    grpcTransport.getServices()["recipe"]
  );

  grpcServer.addService(
    grpcObject.user.UserService.service,
    grpcTransport.getServices()["user"]
  );

  console.info(`initilized grpc app`);
  return grpcServer;
};

const creds = () => grpc.ServerCredentials.createInsecure();

module.exports = {
  setup,
  creds,
};
