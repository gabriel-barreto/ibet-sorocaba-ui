import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Input({
  className,
  helper,
  label,
  mask,
  name,
  onInput,
  type,
  ...props
}) {
  const [value, setValue] = useState('');

  function onInputHandler({ target }) {
    const prev = value;
    let { value: payload } = target;

    if (value && mask) payload = mask(payload);
    setValue(payload);

    if (prev === payload) return null;
    return onInput(payload);
  }

  return (
    <S.InputGroup className={className}>
      {label ? <S.InputLabel htmlFor={name}>{label}:</S.InputLabel> : null}
      {helper ? <S.InputHelper>{helper}</S.InputHelper> : null}
      <S.InputField
        {...props}
        type={type}
        name={name}
        value={value}
        onChange={onInputHandler}
      />
    </S.InputGroup>
  );
}

Input.defaultProps = {
  className: '',
  helper: '',
  label: '',
  mask: false,
  type: 'text',
};
Input.propTypes = {
  className: PropTypes.string,
  helper: PropTypes.string,
  label: PropTypes.string,
  mask: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onInput: PropTypes.func.isRequired,
};

export default Input;
