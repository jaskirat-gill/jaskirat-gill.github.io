import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import "../../App.css";
import {
  Box,
  Button,
  Card,
  Grow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ProjectData, Projects } from "./ProjectGalleryHelper";
import ProjectCarousel from "./ProjectCarousel";

const ProjectGallery = ({}) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [selectedProject, setSelectedProject] = useState<ProjectData>(
    Projects[0]
  );

  return (
    <Box
      id="projects"
      sx={{
        width: "90vw",
        marginTop: "3vh",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Typography variant="h2" color="primary" align="center">
        Projects
      </Typography>
      <Box
        sx={{
          display: "grid",
          width: "100%",
          justifyContent: "center",
          gridTemplateColumns: isMobile ? "1fr" : "35vw 35vw",
          gridTemplateRows: "fit-content",
          gridColumnGap: "2vw",
          gridRowGap: "3vh",
          marginTop: " 50px",
        }}
      >
        {Projects.map((project: ProjectData) => {
          return (
            <ProjectCard
              project={project}
              selected={selectedProject.id === project.id}
              setSelectedProject={setSelectedProject}
            />
          );
        })}
      </Box>
      {selectedProject && <ProjectCarousel project={selectedProject} />}
    </Box>
  );
};

export default ProjectGallery;
