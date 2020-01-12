import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Tabs } from '../src/components';

storiesOf('Tabs', module).add('Default', () => {
  const Lorem = styled.p`
    font-size: 1.6rem;
  `;
  const entries = [
    { label: 'Lorem', component: () => <Lorem>Lorem</Lorem> },
    { label: 'Ipsum', component: () => <Lorem>Ipsum</Lorem> },
    { label: 'Lorem Ipsum', component: () => <Lorem>Lorem Ipsum</Lorem> },
  ];

  return <Tabs entries={entries} />;
});
