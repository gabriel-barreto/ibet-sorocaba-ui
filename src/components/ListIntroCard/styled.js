import styled from 'styled-components';

import { Container } from '../../styles';

export const ListIntroCardsWrapper = styled.div`
  ${Container};

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0.8rem;
  padding-bottom: 4.8rem !important;

  @media (max-width: 1023px) {
    > *:not(:last-of-type) {
      margin: 0 0 2.4rem 0;
    }
  }

  @media (min-width: 1024px) {
    column-gap: 2.4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;
