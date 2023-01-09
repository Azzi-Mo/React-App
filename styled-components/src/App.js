import React from "react";
import { Container, Header } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";

const theme = { color: "red" };
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header color={theme} >this is header</Header>
      </Container>
    </ThemeProvider>
  );
}

export default App;
