import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Input } from '../../../components';

import * as S from './styled';

import fields from './fields';

function SpecializationForm({ onSubmit }) {
  const [state, setState] = useState({});

  function onInputHandler(key, value) {
    const actual = state;

    fields[key] = value;
    return setState(prev => ({ ...prev, ...actual }));
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    return onSubmit(state);
  }

  return (
    <S.FormWrapper method="POST" onSubmit={onSubmitHandler}>
      {fields.map(each => (
        <Input
          {...each}
          key={each.name}
          onInput={value => onInputHandler(each.name, value)}
        />
      ))}
      <S.FormSubmitButton type="Submit">Garantir meu lugar</S.FormSubmitButton>
    </S.FormWrapper>
  );
}

SpecializationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SpecializationForm;
