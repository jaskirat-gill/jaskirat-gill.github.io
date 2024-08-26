import React, { useState } from "react";
import { ProjectData, Link } from "./ProjectGalleryHelper";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grow,
  MobileStepper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
interface IProjectCarouselProps {
  project: ProjectData;
}

const ProjectCarousel = ({ project }: IProjectCarouselProps) => {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 3;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Card
      id="ProjectCarousel"
      sx={{
        maxWidth: isMobile ? "80%" : 645,
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          height: 440,
          flexGrow: 1,
          display: "block",
          backgroundColor: "rgba(0,0,0,0.01)",
        }}
      >
        <AutoPlaySwipeableViews
          axis={"x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {project.mediaList.map((step, index) => (
            <div key={step.alt}>
              {Math.abs(activeStep - index) <= 2 ? (
                <CardMedia
                  component="img"
                  sx={{
                    display: "block",
                    height: "380px",
                    margin: "0 auto",
                    paddingTop: "20px",
                    objectFit: "contain",
                    overflow: "hidden",
                  }}
                  src={step.url}
                  title={step.alt}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              style={{ color: "#fff" }}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              style={{ color: "#fff" }}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
          sx={{ background: "rgba(0,0,0,0.0)", marginBottom: "10px" }}
        />
      </Box>
      <CardContent sx={{ background: "secondary.main" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          color="primary"
          style={{
            fontWeight: "bold",
            display: "grid",
            justifyContent: "center",
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          color="#fff"
          component="p"
          sx={{ fontSize: "1.1rem" }}
        >
          {project.content}
        </Typography>
        {project.links.map((link) => {
          return (
            <Chip
              clickable
              color="primary"
              variant="outlined"
              component="a"
              href={link.url}
              label={link.displayText}
              style={{ marginRight: "5px", marginTop: "5px" }}
            />
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ProjectCarousel;
