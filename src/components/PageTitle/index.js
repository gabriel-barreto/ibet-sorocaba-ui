import React from 'react';
import PropTypes from 'prop-types';

import { Media } from '../../utils';

import * as C from './content';
import * as S from './styled';

import Featured from './Featured';

function PageTitle({ featured, small, title, name }) {
  function scrollDown() {
    const target = document.querySelector('main');
    const navbar = document.querySelector('.navbar');

    const [{ top }] = target.getClientRects();
    const [{ height: navbarHeight }] = navbar.getClientRects();

    return window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: top - navbarHeight + window.scrollY,
    });
  }

  return (
    <S.PageTitleWrapper small={small} bg={C.bg[name][Media.getScreenSize()]}>
      <S.PageTitleText className={!title || name === 'home' ? '--hide' : ''}>
        {title}
      </S.PageTitleText>
      {featured && featured.title ? <Featured {...featured} /> : null}
      {!small && !featured ? (
        <S.PageTitleScrollIndicator onClick={scrollDown} />
      ) : null}
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
