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
        width: "100vw",
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: 999,
        minHeight: "100vh",
      }}
    >
      <Grid container sx={{ mt: "2%" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ height: isMobile ? "" : "51vh", minHeight: "50vh" }}
        >
          <Box
            sx={{
              height: "80%",
              width: isMobile ? "90%" : "80%",
              marginLeft: "auto",
              marginRight: "auto",
              mt: "5%",
            }}
          >
            {" "}
            <ProjectCard
              project={ProjectsData[0]}
              setSelectedProjects={setSelectedProject}
            />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ height: isMobile ? "" : "51vh", minHeight: "50vh" }}
        >
          <Box
            sx={{
              height: "80%",
              width: isMobile ? "90%" : "80%",
              marginLeft: "auto",
              marginRight: "auto",
              mt: "5%",
            }}
          >
            {" "}
            <ProjectCard
              project={ProjectsData[2]}
              setSelectedProjects={setSelectedProject}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ height: isMobile ? "" : "51vh", minHeight: "50vh" }}
        >
          <Box
            sx={{
              height: "80%",
              width: isMobile ? "90%" : "80%",
              marginLeft: "auto",
              marginRight: "auto",
              mt: isMobile ? "5%" : "",
            }}
          >
            {" "}
            <ProjectCard
              project={ProjectsData[3]}
              setSelectedProjects={setSelectedProject}
            />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ height: isMobile ? "" : "51vh", minHeight: "50vh" }}
        >
          <Box
            sx={{
              height: "80%",
              width: isMobile ? "90%" : "80%",
              marginLeft: "auto",
              marginRight: "auto",
              mt: isMobile ? "5%" : "",
            }}
          >
            {" "}
            <ProjectCard
              project={ProjectsData[1]}
              setSelectedProjects={setSelectedProject}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectsPreview;
