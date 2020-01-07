import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Slider from '../src/components/Slider';

storiesOf('Slider', module).add('Default', () => {
  const Wrapper = styled.div`
    background-color: var(--darkest);
    padding: 3.2rem;
    width: 100%;
  `;
  return (
    <Wrapper>
      <Slider />
    </Wrapper>
  );
});
