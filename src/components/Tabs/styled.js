import styled from 'styled-components';

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TabsSelector = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TabsTab = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--secondary);
  display: flex;
  font-size: 1.6rem;
  justify-content: center;
  outline-color: transparent;
  padding: 0.8rem 1rem;

  :first-of-type {
    padding-left: 0;
  }

  &.--active {
    font-weight: 600;
    position: relative;
    &::after {
      background-color: var(--secondary);
      content: '';
      display: block;
      height: 3px;
      position: absolute;
      bottom: 0;
      left: 10px;
      width: 16px;
    }
    :first-of-type::after {
      left: 0;
    }
  }
`;

export const TabsComponentContainer = styled.div`
  padding: 1.6rem 0 0 0;
`;
