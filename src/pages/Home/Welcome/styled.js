import styled from 'styled-components';

import { Container } from '../../../styles';

export const WelcomeWrapper = styled.section`
  ${Container};
  padding-top: 3.2rem;
  padding-bottom: 1.6rem;
  @media (min-width: 768px) {
    padding-top: 3.2rem;
    padding-bottom: 2.4rem;
  }
  @media (min-width: 1024px) {
    padding-top: 4.8rem;
    padding-bottom: 1rem;
  }
`;

export const WelcomeMessage = styled.p`
  color: var(--dark);
  font-size: 2rem;
  font-weight: 600;
  line-height: 144%;
  margin: 0 0 1rem 0;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`;

export const WelcomeTitle = styled.p`
  color: var(--secondary);
  font-size: 2.8rem;
  font-weight: 800;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

export const WelcomeSectionDecorator = styled.span`
  background-color: var(--secondary);
  display: block;
  height: 0.4rem;
  margin: 2rem auto 0 auto;
  width: 6.4rem;
  @media (min-width: 1024px) {
    height: 0.8rem;
    margin: 2.4rem auto 0 auto;
    width: 16rem;
  }
`;
