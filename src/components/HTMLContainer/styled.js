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

const titles = css`
  h2,
  h3 {
    color: var(--secondary);
    font-weight: 600;
    line-height: 152%;
  }

  h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0 1.6rem 0;
    @media (min-width: 1024px) {
      font-size: 3.2rem;
    }
  }

  h3 {
    font-size: 1.8rem;
    margin: 4.8rem 0 2.4rem 0;
    :first-of-type {
      margin: 1.6rem 0 2.4rem 0;
    }
    @media (min-width: 1024px) {
      font-size: 2.4rem;
    }
  }
`;

const list = css`
  li {
    ${p};
  }
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

  ${list};
  ${titles};
`;
