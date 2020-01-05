import chroma from 'chroma-js';
import styled from 'styled-components';

import { Colors } from '../../../../styles';

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
  transition: color 400ms;
  will-change: color;

  :last-of-type {
    margin: 0 0 2.4rem 0;
  }

  &.--featured {
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
      :last-of-type {
        margin: 0;
      }

      :not(:last-of-type) {
        margin: 0 2.4rem 0 0;
      }
    }

    :hover {
      background-color: var(--secondary-dark);
    }
  }

  :hover,
  :focus {
    color: var(--lightest);
    > ${NavbarSocialInfoIcon} {
      color: var(--lightest);
      fill: var(--lightest);
    }
  }
`;
