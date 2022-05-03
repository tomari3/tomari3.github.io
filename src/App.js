import React, { useState } from "react"; // import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { lightTheme, darkTheme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import Global from "./styles/Global";

import { ColoredWrapper } from "./components/Home/ColoredWrapper";
import { AnimatedRoutes } from "./components/AnimatedRoutes";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <Global />
        <ColoredWrapper />
        <BrowserRouter>
          <AnimatedRoutes toggle={toggleTheme} />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
