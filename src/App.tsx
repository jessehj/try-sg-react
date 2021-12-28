import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardMain from "./pages/BoardMain";

const App = function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
