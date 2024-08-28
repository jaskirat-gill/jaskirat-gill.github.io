import { useState } from "react";
import { ProjectData, Link } from "./ProjectsHelper";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
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
      sx={{
        maxWidth: isMobile ? "90%" : "60%",
        margin: "auto",
        marginTop: "5%",
        marginBottom: isMobile ? "5%" : "",
        borderRadius: "15px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        backgroundColor: "var(--dark-background-color)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0 6px 25px rgba(0, 0, 0, 0.15)",
        },
        zIndex: 999,
        outline: "solid 5px var(--secondary-gold)",
      }}
    >
      <Box
        sx={{
          height: 440,
          flexGrow: 1,
          display: "block",
          backgroundColor: "rgba(0, 0, 0, 0.0)",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          overflow: "hidden",
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
                    width: "100%",
                    objectFit: "cover",
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
              sx={{ color: "primary.main" }}
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
              sx={{ color: "primary.main" }}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
          sx={{
            background: "var(--dark-background-color)",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
            padding: "10px 0",
          }}
        />
      </Box>
      <CardContent
        sx={{
          backgroundColor: "var(--dark-background-color)",
          padding: "20px",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          color="primary"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          color="#fff"
          component="p"
          sx={{
            fontSize: "1.1rem",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          {project.content}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {project.links.map((link) => (
            <Chip
              key={link.displayText}
              clickable
              color="primary"
              variant="outlined"
              component="a"
              href={link.url}
              label={link.displayText}
              sx={{
                margin: "5px",
                padding: "10px",
                fontWeight: "bold",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                "&:hover": {
                  backgroundColor: "primary.light",
                },
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCarousel;
