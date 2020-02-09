import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Toast({ content, onClose, title, theme, visible }) {
  return (
    <S.ToastWrapper className={`--${theme} ${visible ? '--visible' : ''}`}>
      <S.ToastHeader>
        <S.ToastTitle>{title}</S.ToastTitle>
        <S.ToastTogglerButton type="button" onClick={onClose}>
          x
        </S.ToastTogglerButton>
      </S.ToastHeader>
      <S.ToastBody>
        <S.ToastContent>{content}</S.ToastContent>
      </S.ToastBody>
    </S.ToastWrapper>
  );
}

Toast.defaultProps = { theme: 'success', visible: false };
Toast.propTypes = {
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['success', 'danger']),
  visible: PropTypes.bool,
};

export default Toast;
