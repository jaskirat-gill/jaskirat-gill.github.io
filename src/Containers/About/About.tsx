import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Card,
  Chip,
  Collapse,
  Grid,
  Paper,
  Slide,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import "./About.css";
const About = ({}) => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <Card
      id="home"
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
                  src="https://i.imgur.com/p1z1EMJ.jpg"
                  sx={{ width: "15vw", height: "15vw", aspectRatio: "auto" }}
                />
              )}
            </Grid>
          </Grid>

          <Typography sx={{ marginTop: "3%", marginBottom: "2%" }}>
            Computer Science Major At UBC aspiring to be a Software Developer.
            Interested in Full Stack Development, Machine Learning, and more!
            Feel free to check out my resume and connect with me on LinkedIn or
            any of the links below!
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
              src="https://i.imgur.com/p1z1EMJ.jpg"
              sx={{ width: "15vw", height: "15vw", aspectRatio: "auto" }}
            />
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

export default About;
