import chroma from 'chroma-js';
import styled from 'styled-components';

import { Colors } from '../../styles';

export const MemberCard = styled.div`
  align-items: center;
  background-color: var(--dark);
  border-radius: 2px;
  box-shadow: 0 2px 4px ${chroma(Colors.darkest).alpha(0.32)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.4rem;
  width: 100%;
`;

export const MemberPhoto = styled.img`
  height: 16rem;
  object-fit: cover;
  margin: 0 0 2rem 0;
  width: 16rem;
`;

export const MemberName = styled.p`
  color: var(--lightest);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 144%;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`;

export const MemberTitle = styled.p`
  color: var(--secondary);
  font-size: 1.6rem;
  line-height: 144%;
  margin: 0.4rem 0 0 0;
  text-align: center;
`;

export const MemberSocial = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem 0 -0.8rem 0;
`;

export const MemberSocialLink = styled.a`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  height: 4.8rem;
  justify-content: center;
  transition: background-color 400ms;
  width: 4.8rem;
  will-change: background-color;

  > svg {
    fill: var(--primary-light);
    height: 2.4rem;
    transition: fill 400ms;
    width: 2.4rem;
    will-change: fill;
  }

  :hover,
  :focus {
    background-color: var(--primary-light);
    > svg {
      fill: var(--dark);
    }
  }
`;
