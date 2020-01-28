import Chroma from 'chroma-js';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Colors, Container } from '../../../styles';

export const AboutSectionWrapper = styled.section`
  ${Container};

  padding-top: 1.6rem;
  padding-bottom: 3.2rem;
  @media (min-width: 768px) {
    padding-top: 0.8rem;
    padding-bottom: 2.4rem;
  }
  @media (min-width: 1024px) {
    align-items: center;
    column-gap: 2.4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding-top: 4.8rem;
    padding-bottom: 4.8rem;
  }
`;

export const AboutCoordinatorTitle = styled.p``;

export const AboutCoordinatorPosition = styled.p``;

export const AboutCoordinatorName = styled.p`
  color: var(--secondary);
  font-size: 2.4rem;
`;

export const AboutContentWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

export const AboutContentButton = styled(Link)`
  align-items: center;
  background-color: var(--darkest);
  box-shadow: 0 2px 4px ${Chroma(Colors.darkest).alpha(0.32)};
  color: var(--lightest);
  display: flex;
  font-size: 1.6rem;
  justify-content: center;
  margin: 1.6rem 0 0 0;
  min-height: 4.8rem;
  outline-color: transparent;
  padding: 0.8rem 4.8rem;
  text-transform: uppercase;
  transition: background-color 400ms, box-shadow 400ms, color 400ms;
  width: 100%;
  will-change: background-color, box-shadow, color;

  @media (min-width: 1024px) {
    width: fit-content;
  }

  :hover,
  :focus {
    background-color: var(--dark);
    box-shadow: 0 1px 2px ${Chroma(Colors.darkest).alpha(0.24)};
    color: var(--light);
  }
`;
