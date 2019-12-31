import chroma from 'chroma-js';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { Colors } from '../../styles';

export const NavTitle = styled.h1`
  height: 0;
  opacity: 0;
  overflow: hidden;
  visibility: hidden;
  width: 0;
`;

export const NavBrandWrapper = styled.div`
  background-color: var(--primary);
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0.8rem 2rem;
  width: fit-content;
`;

export const NavBrand = styled.img`
  height: auto;
  max-height: 6.4rem;
  object-fit: contain;
`;

export const NavbarContent = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  width: 1000px;
`;

export const NavbarSocial = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 1rem 0;
  width: 100%;
`;

export const NavbarSocialGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  > *:not(:last-child) {
    margin: 0 0.8rem 0 0;
  }
`;

export const NavbarSocialButton = styled.a`
  align-items: center;
  background-color: var(--secondary);
  box-shadow: 0 1px 2px ${chroma(Colors.primary).alpha(0.32)};
  display: flex;
  height: 4.4rem;
  justify-content: center;
  transition: background-color 400ms;
  width: 4.4rem;
  will-change: background-color;

  :hover {
    background-color: var(--secondary-dark);
  }
`;

export const NavbarSocialButtonIcon = styled.span`
  color: var(--light);
  fill: var(--light);
  height: 2.4rem;
  vertical-align: -0.125em;
  width: 2.4rem;
`;

export const NavbarSocialInfoIcon = styled.span`
  color: var(--light);
  fill: var(--light);
  height: 1.8rem;
  margin: 0 0.8rem 0 0;
  transition: color 400ms, fill 400ms;
  vertical-align: -0.125em;
  width: 1.8rem;
  will-change: color, fill;
`;

export const NavbarSocialInfo = styled.a`
  align-items: center;
  display: flex;
  color: var(--light);
  justify-content: center;
  font-size: 1.6rem;
  transition: color 400ms;
  will-change: color;

  :not(:last-of-type) {
    margin: 0 2.4rem 0 0;
  }

  &.--featured {
    background-color: var(--secondary);
    box-shadow: 0 1px 2px ${chroma(Colors.secondary).alpha(0.32)};
    padding: 1.125rem 1.6rem 0.8rem 1.6rem;
    transition: background-color 400ms;
    will-change: background-color;

    :hover {
      background-color: var(--secondary-dark);
    }
  }

  :hover {
    color: var(--lightest);
    > ${NavbarSocialInfoIcon} {
      color: var(--lightest);
      fill: var(--lightest);
    }
  }
`;

export const NavbarNav = styled.nav`
  align-items: center;
  background-color: var(--primary);
  display: flex;
  height: 8rem;
  padding: 0.8rem;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const activeLink = css`
  &.--active {
    color: var(--lightest);
    font-weight: 600;
    &::after {
      background-color: var(--secondary);
      bottom: -2px;
      content: '';
      display: block;
      height: 2px;
      left: 20px;
      position: absolute;
      width: 16px;
    }
  }
`;

const featuredLink = css`
  &.--featured {
    align-items: center;
    background-color: var(--secondary);
    display: flex;
    box-shadow: 0 1px 2px ${chroma(Colors.secondary).alpha(0.32)};
    justify-content: center;
    line-height: 100%;
    padding: 1.6rem 2rem 1rem 2rem;
    transition: background-color 400ms;
    will-change: background-color;

    &.--active,
    :hover {
      background-color: var(--secondary-dark);
    }

    ::after {
      display: none;
    }
  }
`;

export const NavLink = styled(Link)`
  color: var(--light);
  font-size: 1.6rem;
  line-height: 144%;
  padding: 0.8rem 2rem 0 2rem;
  position: relative;
  text-transform: uppercase;
  transition: color 400ms;
  white-space: nowrap;
  will-change: color;

  :hover {
    color: var(--lightest);
  }

  ${activeLink}
  ${featuredLink}
`;

export const Navbar = styled.section`
  align-items: center;
  display: flex;
  height: 16rem;
  padding: 0 calc((100vw - 1400px) / 2);
  justify-content: space-between;
  width: 100%;

  ${NavBrandWrapper}, ${NavbarNav} {
    box-shadow: 0 2px 4px ${chroma(Colors.primary).alpha(0.4)};
  }
`;
