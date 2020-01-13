import styled from 'styled-components';

export const ThemesContainer = styled.div`
  > *:not(:last-of-type) {
    margin: 0 0 2.4rem 0;
  }
  @media (min-width: 1024px) {
    column-count: 2;
    column-gap: 2.4rem;
    column-rule: 0 hidden transparent;
    > * {
      break-inside: avoid;
    }
  }
`;
