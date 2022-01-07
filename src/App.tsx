import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import WelcomePage from "./pages/WelcomePage";

import MyPage from "./pages/MyPage";
import MainPage from "./pages/MainPage";

import GlobalStyle from "./styles/global";

const App = function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
