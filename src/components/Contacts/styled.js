import chroma from 'chroma-js';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Colors } from '../../styles';

import sectionBgXl from '../../assets/contact-bg-xl.jpg';

export const ContactSectionWrapper = styled.section`
  align-items: center;
  background: ${`url(${sectionBgXl})`} no-repeat bottom center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 4rem 3.2rem;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 4.8rem 6.4rem;
  }
  @media (min-width: 1200px) {
    padding: 8rem;
  }
  @media (max-width: 1024px), (min-width: 1921px) {
    background: none;
  }
  @media screen and (min-height: 768px) {
    background-position: center -80px;
  }
  @media screen and (min-height: 1080px) {
    background-position: center -148px;
  }
`;

export const ContactSectionButton = styled(Link)`
  background-color: var(--secondary);
  border: none;
  border-radius: 2px;
  box-shadow: 0 2px 4px ${chroma(Colors.darkest).alpha(0.32)};
  color: var(--lightest);
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 144%;
  margin: 4.8rem 0 2.4rem 0;
  padding: 2rem 3.2rem 1.6rem 3.2rem;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 400ms;
  width: 100%;
  will-change: background-color;
  @media (min-width: 1024px) {
    min-width: 40rem;
    width: fit-content;
  }

  :hover {
    background-color: var(--secondary-dark);
  }
`;

export const ContactHoursInfo = styled.p`
  color: var(--dark);
  font-size: 1.6rem;
  line-height: 144%;
  &:not(:last-of-type) {
    margin-bottom: 0.4rem;
  }
`;
