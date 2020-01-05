import Chroma from 'chroma-js';
import styled from 'styled-components';

import { Colors } from '../../../../styles';

export const CoordinatorPhoto = styled.img`
  box-shadow: 0 2px 4px ${Chroma(Colors.darkest).alpha(0.32)};
  height: auto;
  object-fit: contain;
  width: 100%;
`;

export const CoordinatorTitle = styled.p``;

export const CoordinatorPosition = styled.p``;

export const CoordinatorName = styled.p`
  color: var(--secondary);
  font-size: 2.4rem;
`;

export const CoordinatorInfoWrapper = styled.span`
  width: 100%;

  > * {
    line-height: 144%;
  }

  > ${CoordinatorTitle}, ${CoordinatorPosition} {
    color: var(--dark);
    font-size: 1.6rem;
  }

  > ${CoordinatorName}, ${CoordinatorPosition} {
    font-weight: 600;
  }
`;

export const CoordinatorWrapper = styled.div`
  display: none;
  @media (min-width: 1024px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  :not(.--visible) {
    > ${CoordinatorInfoWrapper} {
      display: none;
      @media screen and (min-width: 1024px) and (max-width: 1400px) {
        display: flex;
        flex-direction: column;
        margin: 1.6rem 0 0 0;
      }
    }
  }

  &.--visible {
    > ${CoordinatorInfoWrapper} {
      margin: 0 0 1.6rem 0;
      @media (max-width: 1399px) {
        display: none;
        margin: 0;
      }
    }
  }
`;
