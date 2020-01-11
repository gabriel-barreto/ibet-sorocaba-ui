import styled, { css } from 'styled-components';

const p = css`
  color: var(--dark);
  font-size: 1.6rem;
  line-height: 26px;
  :not(:last-of-type) {
    margin: 0 0 2rem 0;
  }
`;

const b = css`
  color: var(--darkest);
  font-size: 1em;
  font-weight: 600;
`;

export const Wrapper = styled.section`
  p {
    ${p};
  }
  b,
  strong,
  .strong {
    ${b};
  }
`;
