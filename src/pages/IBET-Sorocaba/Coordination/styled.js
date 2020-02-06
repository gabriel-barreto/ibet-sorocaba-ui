import chroma from 'chroma-js';
import styled from 'styled-components';

import { Colors, Container } from '../../../styles';

import { HTMLContainer } from '../../../components';

export const CoordinationSectionWrapper = styled.section`
  ${Container};

  padding-top: 4rem;
  padding-bottom: 4rem;
  @media (min-width: 768px) {
    padding-top: 5.6rem;
    padding-bottom: 5.6rem;
  }
  @media (min-width: 1200px) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
`;

export const CoordinationSectionTitle = styled.h1`
  color: var(--secondary);
  font-size: 2.8rem;
  font-weight: 600;
  margin: 0 0 2.4rem 0;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 4rem;
    text-align: left;
  }
`;

export const CoordinationProfilesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    column-gap: 3.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    row-gap: 4rem;
  }
  @media (min-width: 1024px) {
    column-gap: 8rem;
  }
`;

export const CoordinatorProfilePhoto = styled.img`
  box-shadow: 0 2px 4px ${chroma(Colors.darkest).alpha(0.32)};
  grid-area: photo;
  height: 32rem;
  max-width: 32rem;
  object-fit: cover;
  width: 100%;
`;

export const CoordinatorProfileName = styled.h1`
  color: var(--secondary);
  font-size: 1.8rem;
  @media (min-width: 768px) {
    margin: 2.4rem 0 0 0;
    font-size: 2.4rem;
  }
`;

export const CoordinatorProfileInfo = styled.div`
  grid-area: id;
  @media (max-width: 767px) {
    margin-bottom: 1.6rem;
  }
`;

export const CoordinatorProfileTitle = styled.p`
  color: var(--dark);
`;

export const CoordinatorProfileContent = styled(HTMLContainer)`
  grid-area: content;
  margin: 2.4rem 0 0 0;
`;

export const CoordinatorProfilePosition = styled.p`
  color: var(--darkest);
`;

export const CoordinatorProfile = styled.section`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'photo'
    'id'
    'content';

  :not(:last-of-type) {
    margin: 0 0 3.2rem 0;
  }

  @media (min-width: 768px) {
    display: block;
    margin: 0;
  }

  ${CoordinatorProfileName}, ${CoordinatorProfilePosition} {
    font-weight: 600;
  }

  ${CoordinatorProfileName}, ${CoordinatorProfileTitle} {
    margin-bottom: 0.64rem;
  }

  ${CoordinatorProfileTitle}, ${CoordinatorProfilePosition} {
    font-size: 1.6rem;
  }

  ${CoordinatorProfileName},
  ${CoordinatorProfilePosition},
  ${CoordinatorProfileTitle} {
    line-height: 23px;
  }
`;
