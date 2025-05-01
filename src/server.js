require("dotenv").config();
const App = require("./app/app");

const HTTP_PORT = process.env.PORT || 3000;
const GRPC_PORT = process.env.GRPC_PORT || 3001;

const bootstrap = async () => {
  const app = await App();

  app.http.listen(HTTP_PORT, () => {
    console.info(`Server is running on 0.0.0.0:${HTTP_PORT}`);
  });

  const grpc = await app.grpc.setup();
  grpc.bindAsync(`0.0.0.0:${GRPC_PORT}`, app.grpc.creds(), () => {
    console.info(`gRPC server running at 0.0.0.0:${GRPC_PORT}`);
  });
};

void bootstrap().catch((error) => {
  console.error(`catch me: `, error);
});
