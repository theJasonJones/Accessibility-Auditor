import React from "react";
import TextInput from "./components/TextInput";
import HeaderOne from "./components/HeaderOne";
import { SubmitInput } from "./components/SubmitInput";
import { Container } from "./components/styled/container.styled";
import Results from "./components/Results";

function App() {
  return (
    <Container>
      <HeaderOne color="#545454">Website Accessibility Tester</HeaderOne>
      <form method="GET">
        <TextInput />
        <SubmitInput />
      </form>
      {window.location.search !== "" ? (
        <Results url={window.location.search.substr("http").toString()} />
      ) : (
        ""
      )}
    </Container>
  );
}

export default App;
