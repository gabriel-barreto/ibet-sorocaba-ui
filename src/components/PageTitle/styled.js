import chroma from 'chroma-js';
import styled, { css } from 'styled-components';

import { Colors } from '../../styles';

import scrollIndicator from '../../assets/scroll-indicator.svg';

export const PageTitleWrapper = styled.section`
  align-items: center;
  background: ${props =>
      props.bg
        ? `linear-gradient(to bottom, ${chroma(Colors.dark).alpha(
            0.56,
          )} 0%, ${chroma(Colors.dark)} 80%), url(${props.bg})`
        : 'var(--dark)'}
    no-repeat center fixed;
  background-blend-mode: multiply;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: ${props => (props.small ? '54vh' : '100vh')};
  justify-content: center;
  padding: 10.4rem 3.2rem 4rem 3.2rem;
  position: relative;
  width: 100%;
`;

const hiddenPageTitleText = css`
  &.--hide {
    color: transparent;
    height: 0;
    opacity: 0;
    overflow: hidden;
    visibility: hidden;
    width: 0;
  }
`;

export const PageTitleText = styled.h1`
  color: var(--secondary);
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 144%;
  text-align: center;
  text-transform: uppercase;

  ${hiddenPageTitleText};
`;

export const PageTitleScrollIndicator = styled.button`
  @keyframes bounce {
    0% {
      transform: transformY(0px);
    }
    50% {
      transform: translateY(16px);
    }
    100% {
      transform: transformY(0px);
    }
  }

  align-items: center;
  animation: bounce 1.2s infinite ease-in-out;
  background-color: transparent;
  background-image: url(${scrollIndicator});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  bottom: 40px;
  display: flex;
  height: 6.4rem;
  justify-content: center;
  outline-color: transparent;
  position: absolute;
  width: 100%;
`;
