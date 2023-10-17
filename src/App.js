import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./styles/Theme";
import { UserContextProvider } from "./context/UserContext";
import { NightContextProvider } from "./context/NightContext";
import { dark, light } from "./styles/Theme";

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
    <UserContextProvider>
      <NightContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Outlet />
        </ThemeProvider>
      </NightContextProvider>
    </UserContextProvider>
  );
}

export default App;
