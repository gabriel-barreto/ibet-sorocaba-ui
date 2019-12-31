import React from 'react';
import PropTypes from 'prop-types';

import * as C from './content';
import * as S from './styled';

import brand from '../../assets/brand.png';

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

function Navbar({ title }) {
  return (
    <S.Navbar className="navbar">
      <S.NavTitle className="navbar-title">{title}</S.NavTitle>
      <S.NavBrandWrapper className="navbar-brand">
        <S.NavBrand src={brand} className="brand" />
      </S.NavBrandWrapper>
      <S.NavbarContent>
        <S.NavbarSocial>
          <S.NavbarSocialGroup>
            {social.map(each => (
              <S.NavbarSocialButton
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
