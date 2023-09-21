import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./styles/Theme";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  color:inherit;
}

`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
