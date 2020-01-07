import chroma from 'chroma-js';
import styled from 'styled-components';

import { Colors } from '../../styles';

export const SliderControls = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0 0 0;
  width: 100%;
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
  > *:not(:last-of-type) {
    margin: 0 2rem 0 0;
    @media (min-width: 768px) {
      margin: 0 2.4rem 0 0;
    }
  }
`;

export const SliderControlGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  > *:not(:last-of-type) {
    margin: 0 0.8rem 0 0;
    @media (min-width: 768px) {
      margin: 0 1rem 0 0;
    }
  }
`;

export const SliderControlDot = styled.button`
  background-color: var(--light);
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 4px ${chroma(Colors.darkest).alpha(0.32)};
  height: 2.4rem;
  opacity: 0.56;
  outline-color: transparent;
  transition: background-color 400ms, opacity 400ms, width 400ms;
  width: 2.4rem;
  will-change: background-color, opacity, width;

  @media (min-width: 768px) {
    height: 3rem;
    width: 3rem;
  }

  :hover,
  :focus {
    background-color: var(--lightest);
    opacity: 0.8;
  }

  &.--active {
    background-color: var(--lightest);
    border-radius: 16px;
    opacity: 1;
    width: 3.2rem;
    @media (min-width: 768px) {
      width: 5.6rem;
    }
  }
`;

export const SliderControlButton = styled.button`
  align-items: center;
  background-color: var(--dark);
  border: none;
  border-radius: 2px;
  box-shadow: 0 2px 4px ${chroma(Colors.darkest).alpha(0.32)};
  color: var(--light);
  display: flex;
  justify-content: center;
  height: 4.4rem;
  outline-color: transparent;
  transition: background-color 400ms, color 400ms;
  width: 4.4rem;
  will-change: background-color, color;

  svg {
    fill: var(--light);
    transition: fill 400ms;
    will-change: fill;
  }

  :hover,
  :focus {
    background-color: var(--darkest);
    color: var(--lightest);
    svg {
      fill: var(--lightest);
    }
  }
`;

export const SlideItem = styled.img`
  border-radius: 2px;
  box-shadow: 0 2px 4px ${chroma(Colors.darkest).alpha(0.32)};
  height: auto;
  max-height: 40rem;
  object-fit: none;
  width: 100%;
`;

export const Slide = styled.div`
  column-gap: 1.6rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SliderWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
