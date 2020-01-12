import React from 'react';
import { storiesOf } from '@storybook/react';

import Unit from '../src/pages/IBET-Brasil/Units/Unit';

storiesOf('IBET Unit', module).add('Default', () => {
  const payload = {
    city: 'Santo André',
    coordinators: [
      {
        name: 'Nélida Cristina',
        title: 'Mestre e doutora PUC/SP',
      },
      {
        name: 'Cristina dos Santos',
        title: 'Mestre e doutora PUC/SP',
      },
    ],
    emails: ['abc@ibet.com.br'],
    initials: 'ABC',
    phones: ['+55 11 4436-0245'],
    uf: 'SP',
  };
  return <Unit {...payload} />;
});
