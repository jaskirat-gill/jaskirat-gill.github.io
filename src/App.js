import { ThemeProvider } from "@emotion/react";
import "./App.css";
import ContactCard from "./Containers/ContactCard/ContactCard";
import TopBar from "./Components/StylizedAppBar.tsx";
import About from "./Containers/About/About.tsx";
import ProjectGallery from "./Containers/ProjectGallery/ProjectGallery.tsx";
import { createTheme } from "@mui/material";
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
      }
    },
  });

  theme.typography.h2 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  };

  theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TopBar />
        <About id="home" />
        <ProjectGallery />
        <ContactCard />
        <div>Made With TypeScript & React From Scratch</div>
      </ThemeProvider>
    </div>
  );
}

export default App;
