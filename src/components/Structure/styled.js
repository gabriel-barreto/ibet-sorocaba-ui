import styled from 'styled-components';

import { Container } from '../../styles';

export const StructureWrapper = styled.section`
  ${Container};

  background-color: var(--darkest);
  @media (min-width: 0px) {
    padding-top: 6.4rem;
    padding-bottom: 6.4rem;
  }
  @media (min-width: 1200px) {
    align-items: center;
    column-gap: 2.4rem;
    display: grid;
    grid-template-columns: 2fr 5fr;
    grid-template-rows: 1fr;
  }
`;

export const StructureContentContainer = styled.aside`
  margin: 0 0 3.2rem 0;
  @media (min-width: 1200px) {
    margin: 0 0 5.4rem 0;
  }
`;

export const StructureTitle = styled.h1`
  color: var(--secondary);
  font-size: 2.8rem;
  font-weight: 600;
  margin: 0 0 2.4rem 0;
  @media (min-width: 1200px) {
    font-size: 3.2rem;
  }
`;

export const StructureParagraphs = styled.span`
  display: block;
  width: 100%;
  > p:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

export const StructureParagraph = styled.p`
  color: var(--light);
  font-size: 1.6rem;
  line-height: 144%;
`;
