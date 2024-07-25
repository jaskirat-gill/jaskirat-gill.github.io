import { ProjectData } from "./ProjectGalleryHelper";
import { smoothScroll } from "../../util";
import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";

interface IProjectCardProps {
  project: ProjectData;
  selected: boolean;
  setSelectedProject: (arg0: ProjectData) => void;
}

const ProjectCard = ({
  project,
  selected,
  setSelectedProject,
}: IProjectCardProps) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundColor: "var(--dark-background-color)",
        overflow: "hidden",
        textAlign: "left",
        paddingBottom: "5px",
        outline: selected ? "solid 5px var(--secondary-gold)" : "none",
      }}
      onClick={() => {
        setSelectedProject(project);
        smoothScroll("ProjectCarousel");
      }}
    >
      <CardMedia
        component="img"
        height="194"
        sx={{
          width: "100%",
          height: "50%",
          maxHeight: "200px",
          overflow: "hidden",
        }}
        image={project.previewImage.url}
      />
      <CardContent sx={{ height: "50%" }}>
        <Typography variant="h4" color={"primary"}>{project.title}</Typography>
        <Typography variant="body1">{project.previewText}</Typography>
        {project.skills.map((skill) => {
          return <Chip label={skill} color="primary" variant="outlined" style={{ marginRight: "5px", marginTop: '5px', marginBottom: '10px' }} />;
        })}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
