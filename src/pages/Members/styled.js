import styled from 'styled-components';

import { Container } from '../../styles';

export const MembersSection = styled.section`
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

export const MembersSectionTitle = styled.h2`
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

export const MembersSectionGroup = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 767px) {
    > *:not(:last-of-type) {
      margin: 0 0 2.4rem 0;
    }
  }
  @media (min-width: 768px) {
    align-items: flex-start;
    column-gap: 1.6rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2.4rem;
  }
  @media (min-width: 1024px) {
    column-gap: 2.4rem;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    column-gap: 3.2rem;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 3.2rem;
  }
  @media (min-width: 1400px) {
    column-gap: 4rem;
  }

  :not(:last-of-type) {
    margin: 0 0 4rem 0;
    @media (min-width: 1024px) {
      margin: 0 0 6.4rem 0;
    }
  }
`;
