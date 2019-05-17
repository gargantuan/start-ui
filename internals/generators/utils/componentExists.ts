/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 * Copied from
 * https://github.com/react-boilerplate/react-boilerplate
 */

import fs from 'fs';
import path from 'path';

const pageComponents = fs.readdirSync(
  path.join(__dirname, '../../../app/components'),
);

const pageContainers = fs.readdirSync(
  path.join(__dirname, '../../../app/containers'),
);

const components = pageComponents.concat(pageContainers);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
