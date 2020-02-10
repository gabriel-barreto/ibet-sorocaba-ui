import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { $Operators } from '../../../utils';

import { FullScreenSpinner, Input } from '../../../components';

import * as S from './styled';

import fields from './fields';

function SpecializationForm({ loading, onSubmit }) {
  const [state, setState] = useState({});

  function onInputHandler(key, value) {
    return setState(prev => ({
      ...prev,
      ...Object.fromEntries([[key, value]]),
    }));
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    const debouncedFn = $Operators.debounce(500, onSubmit);
    return debouncedFn(state);
  }

  return (
    <S.FormWrapper method="POST" onSubmit={onSubmitHandler}>
      <FullScreenSpinner visible={loading} />
      {!loading
        ? fields.map(each => (
            <S.FormInput
              {...each}
              key={each.name}
              onInput={value => onInputHandler(each.name, value)}
            />
          ))
        : null}
      <S.FormSubmitButton type="Submit" disabled={loading}>
        Garantir meu lugar
      </S.FormSubmitButton>
    </S.FormWrapper>
  );
}

SpecializationForm.defaultProps = { loading: false };
SpecializationForm.propTypes = {
  loading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

export default SpecializationForm;
