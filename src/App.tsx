import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Update from "./pages/Update";
import WriteContent from "./pages/WriteContent";
import Main from "./pages/Main";
import DetailContent from "./components/DetailContent";
import Welcome from "./pages/Welcome";

const App = function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/writecontent" element={<WriteContent />} />
        <Route path="/detail/:id" element={<DetailContent />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
