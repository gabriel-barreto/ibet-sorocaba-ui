import styled from 'styled-components';
import chroma from 'chroma-js';

import { Colors } from '../../../../styles';

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
