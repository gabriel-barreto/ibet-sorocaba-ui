import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text } from '@storybook/addon-knobs';

import Spinner from '../src/components/Spinner';

storiesOf('Spinner', module)
  .add('Default', () => {
    return <Spinner />;
  })
  .add('Custom Props', () => {
    const borderSize = number('Border Size', 16);
    const size = number('Size', 112);
    const color = text('Color', '#1a1a1a');
    const visible = boolean('is Visible?', true);

    return (
      <Spinner
        borderSize={borderSize}
        color={color}
        size={size}
        visible={visible}
      />
    );
  });
