import Chroma from 'chroma-js';
import styled from 'styled-components';

import { Colors } from '../../styles';

export const LayoutSpinnerWrapper = styled.div`
  align-items: center;
  background-color: ${Chroma(Colors.darkest).alpha(0.96)};
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  mix-blend-mode: multiply;
  opacity: ${props => (props.visible ? 1 : 0)};
  position: fixed;
  top: 0;
  transition: opacity 400ms, visibility 640ms;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  width: 100%;
  will-change: opacity, visibility;
  z-index: 9999;
`;
