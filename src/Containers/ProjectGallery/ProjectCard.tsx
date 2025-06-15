import { ProjectData } from "./ProjectsHelper";
import { smoothScroll } from "../../util";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
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
          borderRadius: "20px",
          background: "linear-gradient(145deg, rgba(43, 45, 49, 0.95), rgba(35, 36, 40, 0.95))",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(173, 151, 79, 0.1)",
          overflow: "hidden",
          textAlign: "left",
          padding: "20px",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          position: "relative",
          cursor: "pointer",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(45deg, transparent, rgba(173, 151, 79, 0.05), transparent)",
            opacity: 0,
            transition: "opacity 0.3s ease",
            zIndex: 1,
          },
          "&:hover": {
            transform: "translateY(-12px) scale(1.02)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(173, 151, 79, 0.2)",
            border: "1px solid rgba(173, 151, 79, 0.4)",
            "&::before": {
              opacity: 1,
            },
            "& .card-media": {
              transform: "scale(1.08)",
            },
            "& .card-title": {
              color: "#ad974f",
            },
            "& .click-prompt": {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
          "&:active": {
            transform: "translateY(-8px) scale(1.01)",
            transition: "all 0.1s ease",
          },
        }}
        onClick={() => {
          setSelectedProjects(project);
          smoothScroll("projects-gallery");
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "15px",
            marginBottom: "16px",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3))",
              pointerEvents: "none",
            },
          }}
        >
          <CardMedia
            component="img"
            height="220"
            className="card-media"
            sx={{
              borderRadius: "15px",
              objectFit: "cover",
              transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              filter: "brightness(0.9) contrast(1.1)",
            }}
            image={project.previewImage.url}
            alt={project.title}
          />
        </Box>
        
        <CardContent
          sx={{
            padding: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "calc(100% - 236px)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h5"
            className="card-title"
            sx={{
              fontWeight: "700",
              marginBottom: "12px",
              color: "#EAEAEA",
              fontSize: isMobile ? "1.3rem" : "1.4rem",
              lineHeight: 1.2,
              transition: "color 0.3s ease",
              letterSpacing: "0.5px",
            }}
          >
            {project.title}
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              marginBottom: "20px",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "rgba(234, 234, 234, 0.8)",
              fontWeight: "400",
              letterSpacing: "0.2px",
              flexGrow: 1,
            }}
          >
            {project.previewText}
          </Typography>
          
          <Box
            className="click-prompt"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 16px",
              marginTop: "auto",
              background: "linear-gradient(135deg, rgba(173, 151, 79, 0.1), rgba(142, 121, 62, 0.1))",
              border: "1px solid rgba(173, 151, 79, 0.3)",
              borderRadius: "12px",
              opacity: 0,
              transform: "translateY(10px)",
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#ad974f",
                fontWeight: "600",
                fontSize: "0.9rem",
                letterSpacing: "0.5px",
                textAlign: "center",
              }}
            >
              Click to view details →
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grow>
  );
};

export default ProjectCard;
