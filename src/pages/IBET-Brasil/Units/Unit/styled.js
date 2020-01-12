import styled from 'styled-components';

export const UnitTitle = styled.p`
  color: var(--secondary);
  font-size: 1.8rem;
  font-weight: 600;
`;

export const UnitCoordinatorName = styled.p`
  font-weight: 600;
  margin: 0 0 0.24rem 0;
`;

export const UnitCoordinatorTitle = styled.p``;

export const UnitCoordinator = styled.span`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  :not(:first-of-type) {
    padding-top: 0;
  }
  > ${UnitCoordinatorName}, > ${UnitCoordinatorTitle} {
    color: var(--dark);
    font-size: 1.6rem;
    line-height: 23px;
  }
`;

export const UnitContactInfoValue = styled.span`
  color: var(--dark);
  font-size: 1.6rem;
  line-height: 23px;
  margin: 0 0 0 0.8rem;
  transition: color 400ms;
  will-change: color;
`;

export const UnitContactInfo = styled.a`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;

  :not(:last-of-type) {
    margin: 0 0 0.4rem 0;
  }

  svg {
    fill: var(--dark);
    height: 1.8rem;
    margin: 0;
    transition: fill 400ms;
    will-change: fill;
    width: 1.8rem;
  }

  :hover {
    svg {
      fill: var(--darkest);
    }
    > ${UnitContactInfoValue} {
      color: var(--darkest);
    }
  }
`;

export const UnitContactInfoWrapper = styled.span``;

export const UnitContainer = styled.div`
  > ${UnitCoordinator}, > ${UnitContactInfoWrapper} {
    display: flex;
    flex-direction: column;
  }
`;
