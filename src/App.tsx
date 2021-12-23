import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardMain from "./pages/BoardMain";

const App = function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
