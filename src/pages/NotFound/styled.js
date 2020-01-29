import chroma from 'chroma-js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../styles';

export const NotFoundPageWrapper = styled.section`
  align-items: center;
  background-color: var(--light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

export const NotFoundIcon = styled.img`
  height: 6.4rem;
  margin: 0 0 2.4rem 0;
  max-width: 100%;
  width: auto;
  @media (min-width: 1024px) {
    height: 12.8rem;
  }
  @media (min-width: 1200px) {
    height: 25.6rem;
  }
`;

export const NotFoundLabel = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 144%;
  text-align: center;
  text-transform: uppercase;
  max-width: 60rem;
`;

export const NotFoundParagraph = styled.p`
  color: var(--primary);
  font-size: 1.6rem;
  line-height: 144%;
  margin: 1rem 0 2.4rem 0;
  max-width: 60rem;
  text-align: center;
`;

export const NotFoundGoBackHome = styled(Link)`
  background-color: var(--secondary);
  border-radius: 3px;
  box-shadow: 0 1px 2px ${chroma(Colors.darkest).alpha(0.32)};
  cursor: pointer;
  color: var(--lightest);
  font-size: 1.6rem;
  padding: 1.6rem 3.2rem 1rem 3.2rem;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 400ms;
  will-change: background-color;
  :hover {
    background-color: var(--secondary-dark);
  }
`;
