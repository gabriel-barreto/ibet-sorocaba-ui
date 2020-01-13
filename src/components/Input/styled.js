import chroma from 'chroma-js';
import styled from 'styled-components';

import { Colors } from '../../styles';

export const InputGroup = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;

  > label ~ input {
    margin: 0.64rem 0 0 0;
  }
`;

export const InputField = styled.input`
  background-color: var(--lightest);
  border: none;
  border-radius: 2px;
  box-shadow: 0 2px 4px ${chroma(Colors.darkest).alpha(0.32)};
  color: var(--dark);
  font-size: 1.6rem;
  outline-color: var(--secondary);
  padding: 0.8rem 2.4rem 0.8rem 1.6rem;
  width: 100%;

  ::placeholder {
    color: ${chroma(Colors.dark).alpha(0.4)};
  }
`;

export const InputLabel = styled.label`
  color: var(--dark);
  font-size: 1.6rem;
  line-height: 144%;
`;

export const InputHelper = styled.p`
  color: var(--dark);
  font-size: 1.4rem;
  font-style: italic;
  font-weight: 300;
  line-height: 136%;
`;
