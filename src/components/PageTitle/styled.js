import chroma from 'chroma-js';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { Colors } from '../../styles';

export const PageTitleWrapper = styled.section`
  align-items: center;
  background: ${props =>
    props.bg
      ? `linear-gradient(to bottom, ${chroma(Colors.dark).alpha(
        0.56,
      )} 0%, ${chroma(Colors.dark)} 80%), url(${props.bg})`
      : 'var(--dark)'};
  background-attachment: fixed;
  background-blend-mode: multiply;
  background-position: center;
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

export const PageTitleFeaturedTitles = styled.span``;

export const PageTitleFeaturedContainer = styled.div`
  background-color: var(--darkest);
  bottom: 100px;
  box-shadow: 0 2px 4px ${chroma(Colors.darkest).alpha(0.32)};
  left: 32px;
  padding: 3.2rem 1.6rem;
  position: absolute;
  width: calc(100% - 64px);
  @media (min-width: 768px) {
    left: 64px;
    max-width: calc(100% - 128px);
  }
  @media (min-width: 1200px) {
    align-items: center;
    column-gap: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    left: calc((100% - 1200px) / 2);
    max-width: 1200px;
    padding: 3.2rem;
  }
  @media (min-width: 1400px) {
    left: calc((100% - 1400px) / 2);
    max-width: 1400px;
  }
`;

export const PageTitleFeaturedTitle = styled.h2`
  color: var(--secondary);
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 144%;
  text-align: center;
  @media (min-width: 1200px) {
    font-size: 4rem;
  }
`;

export const PageTitleFeaturedSubtitle = styled.p`
  color: var(--lightest);
  font-size: 2rem;
  font-weight: 600;
  line-height: 144%;
  text-align: center;
  @media (max-width: 1200px) {
    margin-bottom: 2.4rem;
  }
  @media (min-width: 1200px) {
    font-size: 2.4rem;
  }
`;

export const PageTitleFeaturedDescriptionContainer = styled.span`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > *:not(:last-of-type) {
    margin: 0 0 1rem 0;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const PageTitleFeaturedDescription = styled.p`
  color: var(--light);
  font-size: 1.6rem;
  line-height: 156%;
`;

export const PageTitleFeaturedLink = styled(Link)`
  align-items: center;
  background-color: var(--secondary);
  color: var(--lightest);
  display: flex;
  font-size: 1.8rem;
  height: 4.8rem;
  padding: 0.5rem 0 0 0;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;

export const PageTitleScrollIndicator = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  bottom: 16px;
  display: flex;
  height: 4.4rem;
  justify-content: center;
  outline-color: transparent;
  position: absolute;
  width: 100%;
`;
