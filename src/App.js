import "./App.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./styles/Theme";
import { UserContextProvider } from "./context/UserContext";
import { NightContextProvider } from "./context/NightContext";
import Header from "./components/Header/Header";

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
    <RecoilRoot>
      <UserContextProvider>
        <NightContextProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Outlet />
          </ThemeProvider>
        </NightContextProvider>
      </UserContextProvider>
    </RecoilRoot>
  );
}

export default App;
