import styled from "styled-components";

export const StyledResults = styled.div`
  text-align: left;
  margin-bottom: 10px;

  code {
    background-color: #545454;
    color: #ffa90a;
    display: block;
    font-weight: bold;
    text-shadow: #000 1px 1px 2px;
    padding: 10px;
  }

  & > div {
    border-bottom: 1px solid #a3a3a3;
    padding-bottom: 30px;
  }
`;
