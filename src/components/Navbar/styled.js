import chroma from 'chroma-js';
import styled, { css } from 'styled-components';

import { Colors } from '../../styles';

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
  min-height: 100%;
  justify-content: center;
  padding: 0.8rem;
  width: fit-content;

  @media (min-width: 1200px) {
    background-color: var(--primary);
    padding: 2.4rem;
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

const dockedNavbar = css`
  &.--docked {
    background-color: transparent;
    box-shadow: 0 3px 4px transparent;
    padding: 0 3.2rem;
    height: 8rem;

    @media (min-width: 768px) {
      padding: 0 var(--padding-vertical-md);
    }
    @media (min-width: 1200px) {
      height: 16rem;
      padding: 0 var(--padding-vertical-lg);
      ${NavBrandWrapper}, .navbar-nav {
        background-color: var(--darkest);
        box-shadow: 0 2px 4px ${chroma(Colors.primary).alpha(0.4)};
      }
    }
    @media (min-width: 1400px) {
      padding: 0 var(--padding-vertical-xl);
    }
  }
`;

export const Navbar = styled.section`
  align-items: center;
  background-color: var(--darkest);
  box-shadow: 0 3px 6px ${chroma(Colors.darkest).alpha(0.4)};
  display: flex;
  height: auto;
  left: 0;
  padding: 1.6rem 3.2rem;
  position: fixed;
  top: 0;
  transition: background-color 400ms, box-shadow 400ms, height 400ms;
  width: 100%;
  will-change: background-color, box-shadow, height;
  z-index: 9;

  ${NavBrandWrapper}, .navbar-nav {
    background-color: transparent;
    transition: background-color 400ms, box-shadow 400ms;
    will-change: background-color, box-shadow;
  }

  --padding-vertical-md: 6.4rem;
  --padding-vertical-lg: calc((100vw - 1200px) / 2);
  --padding-vertical-xl: calc((100vw - 1400px) / 2);
  @media (min-width: 1200px) {
    align-items: center;
    box-shadow: none;
    justify-content: space-between;
    padding: 1rem var(--padding-vertical-md);
  }
  @media (min-width: 1200px) {
    padding: 1.6rem var(--padding-vertical-lg) 1rem var(--padding-vertical-lg);
  }
  @media (min-width: 1400px) {
    padding: 1.6rem var(--padding-vertical-xl) 1rem var(--padding-vertical-xl);
  }

  ${dockedNavbar};
  ${activeNavbar};
`;
