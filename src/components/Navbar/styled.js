import chroma from 'chroma-js';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { Colors } from '../../styles';

const baseFeatured = css`
  align-items: center;
  background-color: var(--secondary);
  box-shadow: 0 1px 2px ${chroma(Colors.secondary).alpha(0.32)};
  display: flex;
  height: 4.8rem;
  justify-content: center;
  outline-color: transparent;
  padding: 1.125rem 1.6rem 0.8rem 1.6rem;
  transition: background-color 400ms;
  width: 100%;
  will-change: background-color;

  @media (min-width: 1200px) {
    width: fit-content;
  }

  :hover,
  :focus {
    background-color: var(--secondary-dark);
  }
`;

export const NavTitle = styled.h1`
  height: 0;
  opacity: 0;
  overflow: hidden;
  visibility: hidden;
  width: 0;
`;

export const NavTogglerIcon = styled.span`
  position: relative;

  ::before,
  &,
  ::after {
    background-color: var(--light);
    display: block;
    transform-origin: center;
    transition: background-color 400ms, transform 400ms;
    height: 0.3rem;
    width: 2rem;
    will-change: background-color, transform;
  }

  ::before,
  ::after {
    content: '';
    position: absolute;
  }

  ::before {
    top: -8px;
    transition: background-color 400ms, transform 400ms, top 400ms;
    will-change: background-color, transform, top;
  }

  ::after {
    bottom: -8px;
    transition: background-color 400ms, transform 400ms, bottom 400ms;
    will-change: background-color, transform, bottom;
  }
`;

export const NavTogglerButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  height: 100%;
  justify-content: center;
  min-height: 4.8rem;
  outline-color: transparent;
  width: 4.8rem;

  :hover,
  :focus {
    > ${NavTogglerIcon} {
      color: var(--lightest);
    }
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const NavBrandWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0.8rem;
  width: fit-content;

  @media (min-width: 1200px) {
    background-color: var(--primary);
    padding: 0.8rem 2rem;
  }
`;

const brandStyle = css`
  height: auto;
  max-height: 6.4rem;
  object-fit: contain;
`;
export const NavBrand = styled.img`
  ${brandStyle}
`;
export const NavBandAlternate = styled.source`
  ${brandStyle}
`;

export const NavbarContent = styled.div`
  background-color: var(--darkest);
  display: flex;
  flex-direction: column-reverse;
  height: calc(100% - 8rem);
  justify-content: center;
  left: 0;
  padding: 0 3.2rem;
  position: fixed;
  top: 80px;
  transform: translateX(-1366px);
  transition: transform 400ms;
  width: 100%;
  will-change: transform;

  @media (min-width: 1200px) {
    align-items: flex-end;
    background-color: transparent;
    flex-direction: column;
    height: fit-content;
    justify-content: flex-end;
    padding: 0 0 0 3.2rem;
    position: relative;
    top: auto;
    transform: translate(0, 0);
  }
  @media (min-width: 1400px) {
    padding: 0 0 0 20rem;
  }
`;

export const NavbarSocial = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  width: 100%;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 1rem 0;
  }
`;

export const NavbarSocialGroup = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  > *:not(:last-child) {
    margin: 0 0 1.6rem 0;
  }

  &.--row {
    flex-direction: row;
    > *:not(:last-child) {
      margin: 0 0.8rem 0 0;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    width: fit-content;
    > *:not(:last-child) {
      margin: 0 0.8rem 0 0;
    }
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
  font-size: 1.6rem;
  justify-content: center;
  margin: 0 0 1rem 0;
  transition: color 400ms;
  will-change: color;

  :last-of-type {
    margin: 0 0 2.4rem 0;
  }

  &.--featured {
    ${baseFeatured}
  }

  :hover {
    color: var(--lightest);
    > ${NavbarSocialInfoIcon} {
      color: var(--lightest);
      fill: var(--lightest);
    }
  }

  @media (min-width: 1200px) {
    :last-of-type {
      margin: 0;
    }

    :not(:last-of-type) {
      margin: 0 2.4rem 0 0;
    }
  }
`;

export const NavbarNav = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 3rem 0;
  width: 100%;

  @media (min-width: 1200px) {
    background-color: var(--primary);
    flex-direction: row;
    height: 8rem;
    padding: 0.8rem;
  }
`;

const activeLink = css`
  &.--active {
    color: var(--lightest);
    font-weight: 600;
    padding: 0 0 0 0.8rem;
    margin: 0 0 0.24rem 0;
    vertical-align: -0.125rem;
    &::after {
      background-color: var(--lightest);
      content: '';
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-56%);
      width: 3px;
    }

    @media (min-width: 1200px) {
      margin: 0;
      padding: 0.8rem 2rem 0 2rem;
      ::after {
        background-color: var(--secondary);
        bottom: -5px;
        height: 3px;
        left: 20px;
        top: auto;
        width: 24px;
      }
    }
  }
`;

const featuredLink = css`
  &.--featured {
    ${baseFeatured};
    box-shadow: 0 1px 2px ${chroma(Colors.secondary).alpha(0.32)};
    margin: 0.4rem 0 0 0;
    padding: 1.6rem 2rem 1rem 2rem;
    text-align: center;

    @media (min-width: 1200px) {
      margin: 0 0 0 1.6rem;
    }

    &.--active {
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
  padding: 0.8rem 0;
  position: relative;
  text-transform: uppercase;
  transition: color 400ms;
  width: 100%;
  white-space: nowrap;
  will-change: color;

  :hover {
    color: var(--lightest);
  }

  @media (min-width: 1200px) {
    padding: 0.8rem 2rem 0 2rem;
    width: fit-content;
  }

  ${activeLink}
  ${featuredLink}
`;

const activeNavbar = css`
  &.--active {
    background-color: var(--darkest);

    ${NavTogglerIcon} {
      & {
        transform: rotate(-45deg);
      }

      ::before {
        top: 0;
      }

      ::after {
        bottom: 0;
        transform: rotate(90deg);
      }
    }

    ${NavbarContent} {
      transform: translateX(0);
    }
  }
`;

export const Navbar = styled.section`
  align-items: center;
  /* background-color: var(--darkest); */
  /* box-shadow: 0 2px 4px ${chroma(Colors.darkest).alpha(0.32)}; */
  display: flex;
  height: 8rem;
  left: 0;
  padding: 0 3.2rem;
  position: fixed;
  top: 0;
  transition: background-color 400ms;
  width: 100%;
  will-change: background-color;
  z-index: 9;

  @media (min-width: 1200px) {
    align-items: flex-end;
    background-color: transparent;
    box-shadow: none;
    height: 16rem;
    justify-content: space-between;
    padding: 0rem 6.4rem;
    ${NavBrandWrapper}, ${NavbarNav} {
      box-shadow: 0 2px 4px ${chroma(Colors.primary).alpha(0.4)};
    }
  }
  @media (min-width: 1200px) {
    padding: 0 calc((100vw - 1200px) / 2);
  }
  @media (min-width: 1400px) {
    padding: 0 calc((100vw - 1400px) / 2);
  }

  ${activeNavbar}
`;
