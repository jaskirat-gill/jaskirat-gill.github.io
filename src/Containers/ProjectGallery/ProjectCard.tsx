import { ProjectData } from "./ProjectsHelper";
import { smoothScroll } from "../../util";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grow,
  Typography,
  useMediaQuery,
} from "@mui/material";

interface IProjectCardProps {
  project: ProjectData;
  setSelectedProjects: (project: ProjectData) => void;
}

const ProjectCard = ({ project, setSelectedProjects }: IProjectCardProps) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Grow in timeout={1000}>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "15px",
          backgroundColor: "rgba(var(--dark-background-color-rgb), 0.8)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          textAlign: "left",
          padding: "15px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          boxSizing: isMobile ? "border-box" : "", 
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0 6px 25px rgba(0, 0, 0, 0.15)",
            cursor: "pointer",
            outline: "solid 5px var(--secondary-gold)",
          },
          "&:active": {
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            transform: "scale(1.02)",
          },
        }}
        onClick={() => {
          setSelectedProjects(project);
          smoothScroll("projects-gallery");
        }}
      >
        <CardMedia
          component="img"
          height="200"
          sx={{
            borderRadius: "10px",
            marginBottom: "8px",
            objectFit: "cover",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
          image={project.previewImage.url}
          alt={project.title}
        />
        <CardContent
          sx={{
            padding: "0 10px 20px 10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            color="primary"
            sx={{
              fontWeight: "bold",
              marginBottom: "10px",
              alignSelf: "flex-start",
            }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              marginBottom: "15px",
              fontSize: "1rem",
              lineHeight: 1.5,
            }}
          >
            {project.previewText}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: '10%'
            }}
          >
            {project.skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                color="primary"
                variant="outlined"
                sx={{
                  padding: "5px 10px 5px 10px",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "primary.light",
                  },
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grow>
  );
};

export default ProjectCard;
