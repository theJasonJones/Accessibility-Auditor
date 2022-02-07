import { StyledTextInput } from "./styled/textInput.styled";

const Input = () => {
  return (
    <StyledTextInput type="text" name="url" required placeholder="https://" />
  );
};

export default Input;
