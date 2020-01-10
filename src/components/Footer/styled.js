import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from '../../styles';

export const FooterWrapper = styled.footer`
  ${Container};

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 0px), (min-width: 768px) {
    padding-top: 3.2rem;
    padding-bottom: 4.8rem;
  }
  @media (min-width: 1024px) {
    column-gap: 2.4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    row-gap: 4rem;
  }
  @media (min-width: 1200px) {
    padding-top: 4.8rem;
    padding-bottom: 8rem;
  }
`;

export const FooterBrand = styled.img`
  height: auto;
  margin: 0 0 3.2rem 0;
  max-height: 4.8rem;
  object-fit: contain;
  width: auto;

  @media (min-width: 1024px) {
    margin: 0;
    max-height: 6.4rem;
  }
`;

export const FooterSitemap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SitemapLink = css`
  color: var(--dark);
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 184%;
  text-align: center;
  transition: color 400ms;
  will-change: color;
  :hover,
  :focus {
    color: var(--darkest);
  }

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const FooterSitemapItem = styled(Link)`
  ${SitemapLink}
`;

export const FooterSitemapExternalItem = styled.a`
  ${SitemapLink}
`;

export const FooterInfos = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 3.2rem 0;

  @media (min-width: 1024px) {
    align-items: flex-end;
    margin: 0;
  }
`;

export const FooterAddressInfo = styled.p`
  color: var(--dark);
  font-size: 1.6rem;
  line-height: 144%;
  text-align: center;
  &.--featured {
    color: var(--darkest);
    font-weight: 600;
  }
  @media (min-width: 1024px) {
    text-align: right;
  }
`;

export const FooterContactInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 3.2rem 0;

  > *:not(:last-of-type) {
    margin: 0 0 1rem 0;
  }

  > *:last-of-type {
    margin: 0;
  }

  > * {
    color: var(--dark);
    svg {
      fill: var(--dark);
    }
    :hover,
    :focus {
      color: var(--darkest);
      svg {
        fill: var(--darkest);
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-end;
    margin: 0 0 1rem 0;

    > *:not(:last-of-type) {
      margin: 0 2.4rem 0 0;
    }
  }
`;

export const FooterSocial = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin: 0 0 4rem 0;
  > *:not(:last-of-type) {
    margin: 0 0.8rem 0 0;
  }
  > a {
    background-color: var(--dark);
    transition: background-color 400ms;
    :hover,
    :focus {
      background-color: var(--darkest);
    }
  }
`;

export const FooterSignature = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 3.2rem 0 0 0;

  @media (min-width: 1024px) {
    align-items: flex-end;
    margin: 0;
  }
`;

export const FooterSignatureMEC = styled.img`
  height: auto;
  margin: 0 0 2.4rem 0;
  max-height: 8rem;
  object-fit: contain;
  width: auto;
`;

export const FooterSignatureText = styled.p`
  color: var(--dark);
  font-size: 1.6rem;
  text-align: center;
  line-height: 136%;
  &:not(:last-of-type) {
    margin: 0 0 0.8rem 0;
  }
`;
