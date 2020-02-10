import chroma from 'chroma-js';
import styled, { css } from 'styled-components';

import { Colors } from '../../styles';

export const ToastTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  padding: 0.4rem 0 0 0;
`;

export const ToastTogglerButton = styled.button`
  background-color: transparent;
  border: none;
  box-shadow: none;
  color: var(--dark);
  font-size: 1.6rem;
  outline-color: transparent;

  &:hover,
  &:focus {
    color: var(--darkest);
  }
`;

export const ToastHeader = styled.div`
  align-items: center;
  border-bottom: 1px solid ${chroma(Colors.darkest).alpha(0.08)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
`;

export const ToastContent = styled.p`
  color: var(--dark);
  font-size: 1.6rem;
  line-height: 156%;
`;

export const ToastBody = styled.div`
  padding: 1.6rem 2.4rem;
`;

const isToastVibible = css`
  &.--visible {
    opacity: 1;
    visibility: visible;
  }
`;

const successTheme = css`
  &.--success {
    > ${ToastBody}, ${ToastHeader} {
      background-color: ${chroma(Colors.success).alpha(0.16)};
    }
  }
`;

const dangerTheme = css`
  &.--danger {
    > ${ToastBody}, ${ToastHeader} {
      background-color: ${chroma(Colors.danger).alpha(0.16)};
    }
  }
`;

export const ToastWrapper = styled.section`
  background-color: var(--lightest);
  border-radius: 2px;
  box-shadow: 0 2px 4px ${chroma(Colors.darkest).alpha(0.32)};
  max-width: 32rem;
  opacity: 0;
  position: fixed;
  right: 8px;
  top: 8px;
  transition: opacity 400ms, visibility 40ms;
  visibility: hidden;
  z-index: 999;
  will-change: opacity, visibility;

  ${isToastVibible};
  ${successTheme};
  ${dangerTheme};
`;
