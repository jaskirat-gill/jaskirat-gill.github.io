import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { createTheme } from "@mui/material";
import Hero from "./Containers/Hero/Hero";
import Projects from "./Containers/ProjectGallery/Projects";
import Contact from "./Containers/Contact/Contact";
import Experience from "./Containers/Experience/Experience";
import TopBar from "./Components/TopBar";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#ad974f",
        dark: "#8e793e",
      },
      secondary: {
        main: "#2b2d31",
        dark: "#232428",
      },
    },
  });

  theme.typography.h2 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Hero />
        <TopBar />
        <Projects />
        <Experience />
        <Contact />
        <div>Made With TypeScript & React From Scratch</div>
      </ThemeProvider>
    </div>
  );
}

export default App;
