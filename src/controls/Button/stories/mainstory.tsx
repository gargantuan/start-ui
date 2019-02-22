/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import BasicUsage from './BasicUsage';

storiesOf('Button', module)
  .add('BasicUsage', () => <BasicUsage/>);
