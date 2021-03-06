import chroma from 'chroma-js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../styles';

export const IntroCardIcon = styled.span`
  --size: 6.4rem;
  --color: var(--light);

  color: var(--color);
  display: block;
  fill: var(--color);
  height: var(--size);
  margin: 0 0 2.4rem;
  transition: color 400ms, fill 400ms;
  width: var(--size);
  will-change: color, fill;
`;

export const IntroCardTitle = styled.h1`
  color: var(--lightest);
  font-size: 2.4rem;
`;

export const IntroCardAction = styled.p`
  bottom: 32px;
  color: var(--secondary);
  font-size: 1.6rem;
  left: 0;
  line-height: 144%;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 2;
`;

export const IntroCardContent = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  padding: 3.2rem;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const IntroCardOverlay = styled.div`
  background: linear-gradient(to bottom, var(--dark), var(--darkest));
  height: 100%;
  left: 0;
  mix-blend-mode: multiply;
  opacity: 0.8;
  position: absolute;
  transition: opacity 400ms;
  top: 0;
  width: 100%;
  will-change: opacity;
  z-index: 1;
`;

export const IntroCardContainer = styled.div`
  background-image: ${props => `url(${props.bg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2px;
  box-shadow: 0 2px 4px ${chroma(Colors.darkest).alpha(0.32)};
  height: 100%;
  position: relative;
  width: 100%;
`;

export const IntroCardLink = styled(Link)`
  height: 40rem;
  cursor: pointer;
  width: 100%;

  @media (min-width: 1024px) {
    height: 44rem;
  }
  @media (min-width: 1200px) {
    height: 40rem;
  }

  ${IntroCardTitle} {
    color: var(--lightest);
  }

  ${IntroCardTitle}, ${IntroCardAction} {
    font-weight: 600;
    text-transform: uppercase;
    transition: color 400ms;
    will-change: color;
  }

  ${IntroCardAction} {
    font-size: 1.6rem;
  }

  * {
    line-height: 144%;
    text-align: center;
  }

  :hover,
  :focus {
    ${IntroCardIcon}, ${IntroCardTitle} {
      color: var(--secondary);
      fill: var(--secondary);
    }

    ${IntroCardOverlay} {
      opacity: 1;
    }
  }
`;
