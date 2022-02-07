import styled from "styled-components";

export const LoadingWrapper = styled.div`
  svg {
    display: block;
    width: 100px;
    height: 100px;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    margin: 25px auto;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
