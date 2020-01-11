import styled from 'styled-components';

import { Container } from '../../../styles';

export const AboutSectionWrapper = styled.section`
  ${Container};

  padding-top: 4rem;
  padding-bottom: 4rem;
  @media (min-width: 768px) {
    padding-top: 5.6rem;
    padding-bottom: 5.6rem;
  }
  @media (min-width: 1200px) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
`;

export const AboutSectionTitle = styled.h1`
  color: var(--secondary);
  font-size: 2.8rem;
  font-weight: 600;
  margin: 0 0 2.4rem 0;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 4rem;
    text-align: left;
  }
`;
