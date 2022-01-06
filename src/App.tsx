import React, { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./common/styles/theme";
import LoginPage from "./pages/Login";
import Header from "./components/shared/Header";
import SignUp from "./pages/SignUp";

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
