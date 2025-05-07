import { readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { AppContainer } from '../app-container.js';
import { BaseController } from './base.controller.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class Controllers {
  container: Map<string, unknown> = new Map();
  init = async (appContainer: AppContainer): Promise<void> => {
    const files = readdirSync(__dirname).filter(
      (file) => file.includes('.controller.') && !file.includes('base.controller')
    );

    console.log('Controllers files: ', files);

    for (const file of files) {
      const filePath = join(__dirname, file);
      const fileUrl = pathToFileURL(filePath);
      const { default: DefaultClass } = await import(fileUrl.href);

      const instance = new DefaultClass();
      if (instance instanceof BaseController) {
        // inject services
        instance.init(appContainer);
      }
      const className = DefaultClass.name;
      console.debug(`importing ${className} instance: `, instance);

      this.container.set(className, instance);
    }
  };
}

export const controllers = new Controllers();
