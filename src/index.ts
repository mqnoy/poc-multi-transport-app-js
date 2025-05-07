import express from 'express';
import { adapters } from './adapters/index.js';
import { controllers } from './controllers/index.js';
import { dataSources } from './datasources/index.js';
import { repositories } from './repositories/index.js';
import { services } from './services/index.js';
const app = express();
const port = 3000;

const main = async (): Promise<void> => {
  await dataSources.init();
  await adapters.init();
  await repositories.init(dataSources);
  await services.init({
    adapters: adapters.container,
    repositories: repositories.container,
  });
  await controllers.init({
    services: services.container,
  });

  app.get('/', (_, res) => {
    res.send('Hello from TypeScript backend!');
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
};

main().catch((e) => {
  console.error(e);
});
