import styled from 'styled-components';

import { Container } from '../../../styles';

export const UnitsSectionWrapper = styled.section`
  ${Container};

  padding-bottom: 4rem;
  padding-top: 4rem;
  @media (min-width: 768px) {
    padding-bottom: 4.8rem;
    padding-top: 4.8rem;
  }
  @media (min-width: 1024px) {
    padding-bottom: 5.6rem;
    padding-top: 5.6rem;
  }
  @media (min-width: 1200px) {
    padding-bottom: 8rem;
    padding-top: 8rem;
  }
`;

export const UnitsSectionTitle = styled.h2`
  color: var(--secondary);
  font-size: 2.8rem;
  font-weight: 600;
  text-align: center;
  margin: 0 0 2.4rem 0;
  @media (min-width: 1200px) {
    font-size: 4rem;
    text-align: left;
  }
`;

export const UnitsSectionGrid = styled.div`
  > *:not(:last-of-type) {
    margin: 0 0 3.2rem 0;
  }
  @media (min-width: 768px) {
    column-gap: 2.4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    row-gap: 3.2rem;
    > *:not(:last-of-type) {
      margin: 0;
    }
  }
  @media (min-width: 1024px) {
    column-gap: 3.2rem;
    row-gap: 4rem;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    column-gap: 4rem;
    grid-template-columns: repeat(4, 1fr);
  }
`;
