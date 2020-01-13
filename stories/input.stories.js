import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { Input } from '../src/components';

const onInput = action('Input');
const Wrapper = styled.div`
  padding: 3.2rem;
  width: 400px;
`;

storiesOf('Input', module)
  .add('Default', () => {
    const props = {
      name: 'test-input',
      label: 'Meu input',
      placeholder: 'Exemplo: Lorem Ipsum',
    };

    return (
      <Wrapper>
        <Input onInput={onInput} {...props} />
      </Wrapper>
    );
  })
  .add('No label', () => {
    const props = {
      name: 'test-input',
      placeholder: 'Lorem Ipsum',
    };

    return (
      <Wrapper>
        <Input onInput={onInput} {...props} />
      </Wrapper>
    );
  })
  .add('with Helper', () => {
    const props = {
      name: 'test-input',
      label: 'Meu input',
      helper: 'Lorem ipsum input',
      placeholder: 'Lorem Ipsum',
    };

    return (
      <Wrapper>
        <Input onInput={onInput} {...props} />
      </Wrapper>
    );
  })
  .add('with Mask', () => {
    const props = {
      name: 'test-cep',
      label: 'CEP',
      helper: 'Insira apenas os números',
      placeholder: 'Exemplo 18200125',
      mask(value) {
        return value
          .replace(/\D/g, '')
          .replace(/(\d{8})(\d)/, '$1')
          .replace(/(\d{2})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1-$2');
      },
    };

    return (
      <Wrapper>
        <Input onInput={onInput} {...props} />
      </Wrapper>
    );
  });
