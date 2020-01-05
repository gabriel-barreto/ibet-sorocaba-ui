import styled from 'styled-components';

export const NavbarSocial = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  width: 100%;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 1rem 0;
  }
`;

export const NavbarSocialGroup = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  > *:not(:last-child) {
    margin: 0 0 1.6rem 0;
  }

  &.--row {
    flex-direction: row;
    > *:not(:last-child) {
      margin: 0 0.8rem 0 0;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    width: fit-content;
    > *:not(:last-child) {
      margin: 0 3.2rem 0 0;
    }
  }
`;
