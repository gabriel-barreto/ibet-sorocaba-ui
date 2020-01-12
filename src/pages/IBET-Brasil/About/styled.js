import styled, { css } from 'styled-components';

import { Container } from '../../../styles';

export const AboutSectionWrapper = styled.section`
  ${Container};

  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  padding-bottom: 4rem;
  @media (min-width: 768px) {
    padding-top: 5.6rem;
    padding-bottom: 5.6rem;
  }
  @media (min-width: 1024px) {
    display: grid;
    column-gap: 3.2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
  @media (min-width: 1200px) {
    column-gap: 6.4rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
`;

export const AboutSectionContentWrapper = styled.article`
  align-content: center;
  align-self: center;
`;

export const AboutSectionTitle = styled.h1`
  color: var(--secondary);
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 27px;
  margin: 0 0 2.4rem 0;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 4rem;
    text-align: left;
  }
`;

export const AboutSectionMap = styled.picture`
  align-items: center;
  align-self: center;
  display: flex;
  justify-content: center;
  justify-self: center;
  margin: 1.6rem 0 0 0;
  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const mapImg = css`
  height: auto;
  max-width: 100%;
  object-fit: contain;
  width: 100%;
`;

export const AboutSectionMapSource = styled.source`
  ${mapImg}
`;

export const AboutSectionMapDefault = styled.img`
  ${mapImg}
`;
