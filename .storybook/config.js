import { configure } from '@storybook/react';

const req = require.context('../src', true, /mainstory.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
