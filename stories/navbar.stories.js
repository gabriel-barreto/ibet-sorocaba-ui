import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Navbar from '../src/components/Navbar';

storiesOf('Navbar', module).add('Default', () => {
  const Background = styled.div`
    background-color: var(--dark);
    min-height: 100vh;
    width: 100%;
  `;

  return (
    <Background>
      <Navbar />
    </Background>
  );
});
