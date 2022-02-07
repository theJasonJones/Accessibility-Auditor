import { StyledForm } from "./styled/form.styled";

const Form = ({ children }) => {
  return <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>;
};

export default Form;
