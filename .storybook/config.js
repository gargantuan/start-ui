import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { lightTheme } from '../src/theme/index.ts';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

const req = require.context('../src', true, /mainstory.tsx$/);
addDecorator(withThemesProvider([lightTheme]));
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
