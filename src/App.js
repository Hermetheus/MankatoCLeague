import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import { useDarkMode } from "./hooks/useDarkMode";
import { GlobalCss } from "./util/globalCss";
import { darkTheme, lightTheme } from "./util/theme";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
      theme={themeMode}
    >
      <BrowserRouter>
        <GlobalCss />
        <PageLayout className="body" theme={theme} toggleTheme={toggleTheme} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
