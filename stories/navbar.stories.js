import React from 'react';
import { storiesOf } from '@storybook/react';

import Navbar from '../src/components/Navbar';

storiesOf('Navbar', module).add('Default', () => {
  return <Navbar />;
});
