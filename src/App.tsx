import React from "react";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./pages/Welcome";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";
import Board from "./pages/Board";
import Write from "./pages/Board/Write";

const App = function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/write" element={<Write />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
};

export default App;
