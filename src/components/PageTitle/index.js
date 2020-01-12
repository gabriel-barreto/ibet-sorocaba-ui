import React from 'react';
import PropTypes from 'prop-types';

import { Media } from '../../utils';

import * as C from './content';
import * as S from './styled';

import Featured from './Featured';

function PageTitle({ featured, small, title, name }) {
  return (
    <S.PageTitleWrapper small={small} bg={C.bg[name][Media.getScreenSize()]}>
      <S.PageTitleText className={!title || name === 'home' ? '--hide' : ''}>
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
  featured: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.arrayOf(PropTypes.string),
      url: PropTypes.string,
    }),
  ]),
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default PageTitle;
