import chroma from 'chroma-js';
import styled from 'styled-components';

import { Colors, Container } from '../../styles';

export const MastersSection = styled.section`
  ${Container};

  padding-bottom: 4rem;
  padding-top: 4rem;
  @media (min-width: 768px) {
    padding-bottom: 5.6rem;
    padding-top: 5.6rem;
  }
  @media (min-width: 1024px) {
    padding-bottom: 6.4rem;
    padding-top: 6.4rem;
  }
  @media (min-width: 1200px) {
    padding-bottom: 8rem;
    padding-top: 8rem;
  }
`;

export const MastersSectionTitle = styled.h1`
  color: var(--secondary);
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 144%;
  margin: 0 0 2.4rem 0;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 4rem;
    text-align: left;
  }
`;

export const MastersButton = styled.a`
  align-items: center;
  background-color: var(--secondary);
  border: none;
  border-radius: 1px;
  box-shadow: 0 2px 4px ${chroma(Colors.darkest).alpha(0.32)};
  color: var(--lightest);
  display: flex;
  font-size: 1.6rem;
  justify-content: center;
  line-height: 144%;
  margin: 4.8rem 0 0 0;
  min-height: 4.4rem;
  outline-color: transparent;
  padding: 1.6rem 4.8rem;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 400ms, color 400ms;
  width: 100%;
  will-change: background-color, color;

  :hover,
  :focus {
    background-color: var(--secondary-dark);
    color: var(--light);
  }

  @media (min-width: 768px) {
    width: fit-content;
  }
`;
