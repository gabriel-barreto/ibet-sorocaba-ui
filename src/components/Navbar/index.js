import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as C from './content';
import * as S from './styled';

function Navbar({ title, match }) {
  const [state, setState] = useState({ active: false });

  function onTogglerActiveHandler() {
    return setState(prev => ({ ...prev, active: !prev.active }));
  }

  return (
    <S.Navbar className={`navbar ${state.active ? '--active' : ''}`}>
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
        <S.NavbarSocial>
          <S.NavbarSocialGroup className="--row">
            {C.social.map(each => (
              <S.NavbarSocialButton
                key={each.url}
                href={each.url}
                target="_blank"
                rel="noreferrer noopener"
                title={each.label}
                alt={each.label}
              >
                <S.NavbarSocialButtonIcon>
                  <each.icon />
                </S.NavbarSocialButtonIcon>
              </S.NavbarSocialButton>
            ))}
          </S.NavbarSocialGroup>
          <S.NavbarSocialGroup>
            {C.infos.map(each => (
              <S.NavbarSocialInfo
                key={each.url}
                href={each.url}
                target="_blank"
                className={each.featured ? '--featured' : ''}
                rel="noreferrer noopener"
                title={each.value}
              >
                <S.NavbarSocialInfoIcon>
                  <each.icon />
                </S.NavbarSocialInfoIcon>
                {each.value}
              </S.NavbarSocialInfo>
            ))}
          </S.NavbarSocialGroup>
        </S.NavbarSocial>
        <S.NavbarNav className="navbar-nav">
          {C.links.map(each => (
            <S.NavLink
              key={each.to}
              className={`${each.to === match.path ? '--active' : ''} ${
                each.featured ? '--featured' : ''
              }`}
              to={each.to}
            >
              {each.label}
            </S.NavLink>
          ))}
        </S.NavbarNav>
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
