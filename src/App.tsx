import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignupPage/SignUpPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

import GlobalStyle from "./styles/global";
import MyPage from "./pages/MyPage/MyPage";
import MainPage from "./pages/MainPage/MainPage";

const App = function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
