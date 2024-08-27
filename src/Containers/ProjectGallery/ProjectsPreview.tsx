import { Box, Grid } from "@mui/material";
import { ProjectData, ProjectsData } from "./ProjectsHelper";
import ProjectCard from "./ProjectCard";

function ProjectsPreview({setSelectedProject}: {setSelectedProject: (project: ProjectData) => void}) {
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
      <Grid container sx={{mt: '3%'}}>
        <Grid item xs={6} sx={{ height: "50vh" }}>
          <Box sx={{ height: "80%", width: "80%", ml: "10%", mt: "5%" }}>
            <ProjectCard project={ProjectsData[0]} setSelectedProjects={setSelectedProject} />
          </Box>
        </Grid>

        <Grid item xs={6} sx={{ height: "50vh" }}>
          <Box sx={{ height: "80%", width: "80%", ml: "10%", mt: "5%" }}>
            <ProjectCard project={ProjectsData[2]} setSelectedProjects={setSelectedProject}/>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ height: "50vh" }}>
          <Box sx={{ height: "80%", width: "80%", ml: "10%"}}>
            <ProjectCard project={ProjectsData[3]} setSelectedProjects={setSelectedProject}/>
          </Box>
        </Grid>

        <Grid item xs={6} sx={{ height: "50vh" }}>
          <Box sx={{ height: "80%", width: "80%", ml: "10%"}}>
            <ProjectCard project={ProjectsData[1]} setSelectedProjects={setSelectedProject}/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectsPreview;
