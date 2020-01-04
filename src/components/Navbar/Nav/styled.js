import styled, { css } from 'styled-components';
import chroma from 'chroma-js';
import { Link } from 'react-router-dom';

import { Colors } from '../../../styles';

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
    align-items: center;
    background-color: var(--secondary);
    box-shadow: 0 1px 2px ${chroma(Colors.secondary).alpha(0.32)};
    display: flex;
    height: 4.8rem;
    justify-content: center;
    margin: 0.4rem 0 0 0;
    outline-color: transparent;
    padding: 1.6rem 2rem 1rem 2rem;
    text-align: center;
    transition: background-color 400ms;
    width: 100%;
    will-change: background-color;

    @media (min-width: 1200px) {
      margin: 0 0 0 1.6rem;
      width: fit-content;
    }

    &.--active {
      background-color: var(--secondary-dark);
    }

    ::after {
      display: none;
    }

    :hover,
    :focus {
      background-color: var(--secondary-dark);
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
