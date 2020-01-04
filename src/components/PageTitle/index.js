import React from 'react';
import PropTypes from 'prop-types';

import { Media } from '../../utils';

import * as C from './content';
import * as S from './styled';

import Featured from './Featured';

function PageTitle({ featured, small, title }) {
  return (
    <S.PageTitleWrapper
      small={small}
      bg={C.bg[title ? title.toLowerCase() : 'home'][Media.getScreenSize()]}
    >
      <S.PageTitleText className={!title ? '--hide' : ''}>
        {title}
      </S.PageTitleText>
      {featured && featured.title ? <Featured {...featured} /> : null}
      {!small ? <S.PageTitleScrollIndicator /> : null}
    </S.PageTitleWrapper>
  );
}

PageTitle.defaultProps = {
  featured: false,
  small: false,
};

PageTitle.propTypes = {
  featured: PropTypes.oneOf([
    PropTypes.bool,
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.arrayOf(PropTypes.string),
      url: PropTypes.string,
    }),
  ]),
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default PageTitle;
