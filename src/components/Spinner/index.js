import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Spinner({ bg, borderSize, className, color, size, visible }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <S.Circle
        bg={bg}
        borderSize={
          isNaN(borderSize) || !borderSize ? borderSize : `${borderSize}px`
        }
        className={className}
        color={color}
        size={isNaN(size) || !size ? size : `${size}px`}
        visible={visible}
      />
    </div>
  );
}

Spinner.defaultProps = {
  bg: '',
  borderSize: 0,
  className: '',
  color: '',
  size: 0,
  visible: true,
};
Spinner.propTypes = {
  bg: PropTypes.string,
  borderSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  visible: PropTypes.bool,
};

export default Spinner;
