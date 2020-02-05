import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

import * as S from './styled';

function FullScreenSpinner({ visible }) {
  return (
    <S.SpinnerWrapper visible={visible}>
      <Spinner />
    </S.SpinnerWrapper>
  );
}

FullScreenSpinner.defaultProps = { visible: false };
FullScreenSpinner.propTypes = { visible: PropTypes.bool };

export default FullScreenSpinner;
