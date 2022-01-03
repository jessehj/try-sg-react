import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./common/styles/theme";

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" />
    </Routes>
  </ThemeProvider>
);

export default App;
