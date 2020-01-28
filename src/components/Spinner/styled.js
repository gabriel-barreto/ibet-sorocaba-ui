import chroma from 'chroma-js';
import styled from 'styled-components';

import { Colors } from '../../styles';

const defaultSize = '11.2rem';
export const Circle = styled.div`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  animation: spin 0.88s linear infinite;
  background: transparent;
  border-radius: 50%;
  border: ${props => props.borderSize || '1.64rem'} solid
    ${props => props.bg || chroma(Colors.light).alpha(0.04)};
  border-left-color: ${props => props.color || Colors.secondary};
  height: ${props => props.size || defaultSize};
  opacity: ${props => (props.visible ? 1 : 0)};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  transition: opacity 400ms, transform 400ms, visibility 400ms;
  width: ${props => props.size || defaultSize};
  will-change: opacity, transform, visibility;
`;
