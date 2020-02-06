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
  background-color: ${chroma(Colors.light).alpha(0.8)};
  border: none;
  border-radius: 2px;
  color: var(--dark);
  font-size: 1.6rem;
  outline-color: var(--secondary);
  padding: 1rem 2.4rem 0.8rem 1.6rem;
  width: 100%;

  ::placeholder {
    color: ${chroma(Colors.dark).alpha(0.64)};
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
