import { Box, Grid, useMediaQuery } from "@mui/material";
import { ProjectData, ProjectsData } from "./ProjectsHelper";
import ProjectCard from "./ProjectCard";

function ProjectsPreview({
  setSelectedProject,
}: {
  setSelectedProject: (project: ProjectData) => void;
}) {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100vw",
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: 999,
        minHeight: "100vh",
        paddingBottom: "5vh",
        paddingLeft: isMobile ? "5%" : "5%",
        paddingRight: isMobile ? "5%" : "5%",
        boxSizing: "border-box",
      }}
    >
      <Grid container sx={{ mt: "2%" }} spacing={isMobile ? 3 : 5}>
        {ProjectsData.map((project, index) => (
          <Grid
            key={project.id}
            item
            xs={12}
            md={6}
            sx={{
              minHeight: isMobile ? "50vh" : "60vh",
              display: "flex",
              alignItems: "stretch",
              padding: isMobile ? "8px" : "16px",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
                maxWidth: "100%",
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box",
                padding: isMobile ? "0" : "8px",
              }}
            >
              <ProjectCard
                project={project}
                setSelectedProjects={setSelectedProject}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProjectsPreview;
