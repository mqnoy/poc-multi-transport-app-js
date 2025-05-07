import { readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class Adapters {
  container: Map<string, unknown> = new Map();
  init = async (): Promise<void> => {
    const files = readdirSync(__dirname).filter((file) => file.includes('.adapter.'));

    console.log('Adapters files: ', files);

    for (const file of files) {
      const filePath = join(__dirname, file);
      const fileUrl = pathToFileURL(filePath);
      const { default: DefaultClass } = await import(fileUrl.href);

      const instance = new DefaultClass();

      const className = DefaultClass.name;
      console.debug(`importing ${className} instance: `, instance);

      this.container.set(className, instance);
    }
  };
}

export const adapters = new Adapters();
