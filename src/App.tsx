import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { FormData } from "./contexts/FormData";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <FormData>
          <Router />
        </FormData>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
