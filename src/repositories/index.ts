import { readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { DataSources } from '../datasources/index.js';
import { BaseRepository } from './base.repository.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class Repositories {
  container = new Map();

  init = async (dataSources: DataSources): Promise<void> => {
    const files = readdirSync(__dirname).filter(
      (file) => file.includes('.repository.') && !file.includes('base.repository')
    );

    console.log('Repositories files: ', files);

    for (const file of files) {
      const filePath = join(__dirname, file);
      const fileUrl = pathToFileURL(filePath);
      const { default: DefaultClass } = await import(fileUrl.href);

      const instance = new DefaultClass();
      if (instance instanceof BaseRepository) {
        // inject dataSources
        instance.init(dataSources);
      }
      const className = DefaultClass.name;
      console.debug(`importing ${className} instance: `, instance);

      this.container.set(className, instance);
    }
  };
}

export const repositories = new Repositories();
