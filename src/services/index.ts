import { readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { BaseService } from './base.service.js';
import { AppContainer } from '../app-container.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class Services {
  container = new Map();

  init = async (appContainer: AppContainer) => {
    const files = readdirSync(__dirname).filter(
      (file) => file.includes('.service.') && !file.includes('base.service')
    );

    console.log('Services files: ', files);

    for (const file of files) {
      const filePath = join(__dirname, file);
      const fileUrl = pathToFileURL(filePath);
      const { default: DefaultClass } = await import(fileUrl.href);

      const instance = new DefaultClass();
      if (instance instanceof BaseService) {
        instance.init(appContainer);
      }
      const className = DefaultClass.name;
      console.debug(`importing ${className} instance: `, instance);

      this.container.set(className, instance);
    }
  };
}

export const services = new Services();
