import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Update from "./pages/Update";

const App = function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Update />} />
        <Route path="/hjg" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
