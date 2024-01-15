import styled from "styled-components";

export const TransitionWrapper = styled.div`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0px" : "20px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;
