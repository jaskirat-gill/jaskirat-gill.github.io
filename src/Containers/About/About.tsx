import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Grid,
  Grow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import CanvasDots from "./HeroCanvas";
import "./Canvas.css"
import { useEffect } from "react";

const About = () => {
  const isMobile = useMediaQuery("(max-width:900px)");



  return (
    <>
  <CanvasDots />    
    <Grow in timeout={1000}>
    <Card
      id="home"
      elevation={15}
      sx={{
        width: "85%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "secondary.main",
        display: "flex",
        flexDirection: "row",
        padding: "5px 20px",
        marginTop: "100px",
      }} 
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            textAlign: "left",
            padding: "10px 25px",
            marginRight: "5%",
          }}
        >
          <Grid container>
            <Grid item xs={9} md={12}>
              <Typography color="primary.main" variant="h2">
                Hi! I'm Jaskirat Gill
              </Typography>
              <Typography variant="h3" color="primary.main">
                Software Developer
              </Typography>
            </Grid>

            <Grid item xs={3} md={0}>
              {isMobile && (
                <Avatar
                  alt="Picture"
                  src="https://i.imgur.com/SRAp1bt.jpeg"
                  sx={{ width: "15vw", height: "15vw", aspectRatio: "auto" }}
                />
              )}
            </Grid>
          </Grid>

          <Typography sx={{ marginTop: "3%", marginBottom: "2%" }}>
            Computer Science Major At UBC aspiring to be a Software Developer.
            Interested in full stack development, machine learning, and more!
            Feel free to check out my resume and connect with me on LinkedIn or
            any of the links {isMobile ? "below" : "above"}!
          </Typography>
          <Chip
            variant="filled"
            label="View Resume"
            color="primary"
            component="a"
            href="/Resume___Jaskirat_Gill___7_20_2024.pdf"
            target="_blank"
            clickable
            sx={{ width: isMobile ? "auto" : "20vw", color: "white" }}
          />
          {isMobile && (
            <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Button href="https://github.com/jaskirat-gill" target="_blank">
              <GitHubIcon fontSize="large"/>
            </Button>
            <Button href="https://www.linkedin.com/in/jaskirat-s-gill/" target="_blank">
              <LinkedInIcon fontSize="large"/>
            </Button>
            <Button href="mailto:gilljaskirat04@gmail.com">
              <Email fontSize="large"/>
            </Button>
          </Box>
          )}
        </Grid>
        <Grid
          item
          xs={0}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!isMobile && (
            <Avatar
              alt="Picture"
              src="https://i.imgur.com/SRAp1bt.jpeg"
              sx={{ width: "15vw", height: "15vw", aspectRatio: "auto" }}
            />
          )}
        </Grid>
      </Grid>
    </Card>
    </Grow>
    </>
    
  );
};

export default About;
