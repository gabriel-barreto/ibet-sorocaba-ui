import styled from 'styled-components';

import { Container } from '../../styles';

export const ListIntroCardsWrapper = styled.div`
  ${Container};

  column-gap: 2.4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  height: 44.8rem;
  padding-top: 0.8rem;
  padding-bottom: 4.8rem !important;
`;
