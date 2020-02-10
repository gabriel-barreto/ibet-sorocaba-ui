import chroma from 'chroma-js';
import styled from 'styled-components';

import { Colors, Container } from '../../styles';

export const ContactFormWrapper = styled.section`
  ${Container};

  padding: 8rem 0 !important;
  margin: 0 auto;
  max-width: 800px;
  width: 90%;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  > *:not(:last-of-type) {
    margin: 0 0 2.4rem 0;
  }
`;

export const ContactFormSubmitButton = styled.button`
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
  margin: 3rem 0 0 0;
  min-height: 4.4rem;
  outline-color: transparent;
  padding: 1.6rem 3.2rem;
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

  :disabled {
    background-color: ${chroma(Colors.secondary).alpha(0.4)};
    cursor: not-allowed;
  }
`;
