import React, { FC, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./common/styles/theme";
import Header from "./components/shared/Header";
import { ROUTES } from "./routes";

const App: FC = () => {
  const [isLogin] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header isLogin={isLogin} />
        <Routes>
          {ROUTES.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
