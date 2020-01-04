import { css } from 'styled-components';

export default css`
  padding: 0 3.2rem;
  @media (min-width: 768px) {
    padding: 0 6.4rem;
  }
  @media (min-width: 1200px) {
    padding: 0 calc((100vw - 1200px) / 2);
  }
  @media (min-width: 1400px) {
    padding: 0 calc((100vw - 1400px) / 2);
  }
`;
