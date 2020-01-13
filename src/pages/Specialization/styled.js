import chroma from 'chroma-js';
import styled from 'styled-components';

import { Colors, Container } from '../../styles';

export const SpecializationSectionWrapper = styled.section`
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
    column-gap: 2.4rem;
    display: grid;
    grid-template-columns: 5fr 2fr;
    padding-bottom: 8rem;
    padding-top: 8rem;
  }
`;

export const SpecializationTitle = styled.h1`
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

export const SpecializationSubtitle = styled.h2`
  color: var(--secondary);
  font-size: 2rem;
  font-weight: 600;
  line-height: 144%;
  margin: 3.2rem 0 2.4rem 0;
  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`;

export const SpecializationFormContainer = styled.aside`
  background-color: var(--light);
  border-radius: 2px;
  box-shadow: 0 2px 4px ${chroma(Colors.darkest).alpha(0.32)};
  height: fit-content;
  padding: 3.2rem;
  @media (max-width: 1023px) {
    margin: 2.4rem 0 0 0;
  }
`;

export const SpecializationFormTitle = styled.h3`
  color: var(--secondary);
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 144%;
  margin: 0 0 2.4rem 0;
`;
