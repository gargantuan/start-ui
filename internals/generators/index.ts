/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 * Copied from
 * https://github.com/react-boilerplate/react-boilerplate
 */

import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import componentGenerator from './component';

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);

  plop.addHelper('directory', comp => {
    try {
      fs.accessSync(
        path.join(__dirname, `../../app/containers/${comp}`),
        fs.F_OK,
      );
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
  plop.setActionType('prettify', (answers, config) => {
    const folderPath = `${path.join(
      __dirname,
      '/../../app/',
      config.path,
      plop.getHelper('properCase')(answers.name),
      '**.js',
    )}`;
    exec(`npm run prettify -- "${folderPath}"`);
    return folderPath;
  });
};
