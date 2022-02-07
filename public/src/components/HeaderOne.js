import { StyledH1 } from "./styled/h1.styled";

const HeaderOne = ({ children, color }) => (
  <StyledH1 color={color}>{children}</StyledH1>
);

export default HeaderOne;
