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
    ${props => props.bg || chroma(Colors.darkest).alpha(0.08)};
  border-left-color: ${props => props.color || Colors.primary};
  height: ${props => props.size || defaultSize};
  margin-bottom: ${props =>
    !props.visible ? `-${props.size || defaultSize}` : '0'}
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? '1' : '0')};
  transition: margin-bottom 640ms, opacity 400ms, visibility 400ms;
  width: ${props => props.size || defaultSize};
  will-change: opacity, visibility;
  z-index: 9;
`;
