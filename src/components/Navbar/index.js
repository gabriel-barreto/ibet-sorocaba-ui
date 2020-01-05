import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as C from './content';
import * as S from './styled';

import Nav from './Nav';
import Social from './Social';

function Navbar({ title, match }) {
  const [state, setState] = useState({ active: false, docked: true });

  function onTogglerActiveHandler() {
    return setState(prev => ({ ...prev, active: !prev.active }));
  }

  function onScrollHandler() {
    if (window.scrollY < 8) {
      setState(prev => ({ ...prev, docked: true }));
    } else {
      setState(prev => ({ ...prev, docked: false }));
    }
  }

  useEffect(() => {
    if (window.scrollY >= 8) {
      setState(prev => ({ ...prev, docked: false }));
    }

    document.addEventListener('scroll', onScrollHandler);
    return () => {
      document.removeEventListener('scroll', onScrollHandler);
    };
  }, []);

  return (
    <S.Navbar
      className={`navbar ${state.active ? '--active' : ''} ${
        state.docked ? '--docked' : ''
      }`}
    >
      <S.NavTitle className="navbar-title">{title}</S.NavTitle>
      <S.NavTogglerButton type="button" onClick={onTogglerActiveHandler}>
        <S.NavTogglerIcon />
      </S.NavTogglerButton>
      <S.NavBrandWrapper className="navbar-brand">
        <picture>
          <S.NavBandAlternate
            srcSet={C.images.brand}
            className="brand"
            media="(min-width: 1200px)"
          />
          <S.NavBrand
            src={C.images.brandSmall}
            className="brand"
            alt={C.brandTitle}
            title={C.brandTitle}
          />
        </picture>
      </S.NavBrandWrapper>
      <S.NavbarContent>
        <Social infos={C.infos} social={C.social} />
        <Nav links={C.links} path={match.path} />
      </S.NavbarContent>
    </S.Navbar>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
Navbar.defaultProps = { title: 'Home' };

export default withRouter(Navbar);
