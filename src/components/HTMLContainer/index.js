import React from 'react';
import PropTypes from 'prop-types';

import { String } from '../../utils';

import * as S from './styled';

function HTMLContainer({ className, content }) {
  return (
    <S.Wrapper
      className={className}
      dangerouslySetInnerHTML={{ __html: String.sanitize(content) }}
    />
  );
}

HTMLContainer.defaultProps = { className: '', content: '' };
HTMLContainer.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
};

export default HTMLContainer;
