import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as C from './content';
import * as S from './styled';

import brand from '../../assets/brand.png';
import brandSmall from '../../assets/brand-sm.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'IBET Sorocaba', to: '/ibet-sorocaba' },
  { label: 'IBET Brasil', to: '/ibet-brasil' },
  { label: 'Especialização', to: '/especializacao' },
  { label: 'Mestrado', to: '/mestrado' },
  { label: 'Membros', to: '/membros' },
  { label: 'Inscreva-se', to: '/inscreva-se', featured: true },
];

const social = [
  {
    label: 'Facebook',
    url: 'https://facebook.com/ibet-sorocaba',
    icon: C.Icons.facebook,
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/ibet-sorocaba',
    icon: C.Icons.instagram,
  },
  {
    label: 'Linkedin',
    url: 'https://linkedin.com/ibet-sorocaba',
    icon: C.Icons.linkedin,
  },
];

const infos = [
  {
    icon: C.Icons.email,
    value: 'sod@ibet.com.br',
    url: 'mailto://sod@ibet.com.br',
  },
  {
    icon: C.Icons.phone,
    value: '+55 15 3202-7783',
    url: 'tel://+55 15 3202-7783',
  },
  {
    icon: C.Icons.student,
    value: 'Acessar Área de Alunos',
    url: '#',
    featured: true,
  },
];

const brandTitle =
  'IBET - Intstituto Brasileiro de Estudos Tributários de Sorocaba';

function Navbar({ title }) {
  // const [state, setState] = useState({ active: false });
  const [state, setState] = useState({ active: true });

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
            srcSet={brand}
            className="brand"
            media="(min-width: 1200px)"
          />
          <S.NavBrand
            src={brandSmall}
            className="brand"
            alt={brandTitle}
            title={brandTitle}
          />
        </picture>
      </S.NavBrandWrapper>
      <S.NavbarContent>
        <S.NavbarSocial>
          <S.NavbarSocialGroup className="--row">
            {social.map(each => (
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
            {infos.map(each => (
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
          {links.map(each => (
            <S.NavLink
              key={each.to}
              className={`${each.label === title ? '--active' : ''} ${
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

Navbar.propTypes = { title: PropTypes.string };
Navbar.defaultProps = { title: 'Home' };

export default Navbar;
