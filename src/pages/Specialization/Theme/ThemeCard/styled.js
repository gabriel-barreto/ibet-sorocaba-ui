import chroma from 'chroma-js';
import styled from 'styled-components';

import { Colors } from '../../../../styles';

export const ThemeCardContainer = styled.section`
  background-color: var(--darkest);
  box-shadow: 0 2px 4px ${chroma(Colors.darkest).alpha(0.32)};
  border-radius: 2px;
  padding: 3.2rem;
`;

export const ThemeCardTitle = styled.h1`
  color: var(--secondary);
  font-size: 2rem;
  font-weight: 600;
  line-height: 144%;
  margin: 0 0 1.6rem 0;
  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`;

export const ThemeCardItems = styled.ul``;

export const ThemeCardItem = styled.li`
  color: var(--lightest);
  font-size: 1.6rem;
  line-height: 144%;
  :not(:last-of-type) {
    margin: 0 0 0.8rem 0;
  }
`;
