import styled from 'styled-components';

export const SpecCoordinationGrid = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3.2rem 0 0 0;
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
  @media (min-width: 1200px) {
    column-gap: 3.2rem;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 3.2rem;
  }
`;
