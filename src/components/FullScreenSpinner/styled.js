import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: ${props => (props.visible ? '0' : '-148px')};
  opacity: ${props => (props.visible ? 1 : 0)};
  padding: 3.2rem;
  transition: margin-top 400ms, opacity 400ms, visibility 640ms;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  width: 100%;
  will-change: margin-top, opacity, visiblity;
`;
