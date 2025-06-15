import {
  Box,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  Chip,
  Grow,
} from "@mui/material";
import { experienceData } from "./ExperienceHelper";

function ExperienceTimeline() {
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
        paddingLeft: isMobile ? "5%" : "10%",
        paddingRight: isMobile ? "5%" : "10%",
        paddingTop: "5vh",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "#ad974f",
          textAlign: "center",
          marginBottom: "4vh",
          fontWeight: "700",
          fontSize: isMobile ? "2rem" : "2.5rem",
        }}
      >
        Professional Experience
      </Typography>

      <Box
        sx={{
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            left: isMobile ? "20px" : "50%",
            top: 0,
            bottom: 0,
            width: "3px",
            background: "linear-gradient(to bottom, #ad974f, #8e793e)",
            transform: isMobile ? "none" : "translateX(-50%)",
            zIndex: 1,
          },
        }}
      >
        {experienceData.map((experience, index) => (
          <Grow key={experience.id} in timeout={1000 + index * 200}>
            <Box
              sx={{
                position: "relative",
                marginBottom: "4vh",
                display: "flex",
                flexDirection: isMobile ? "row" : index % 2 === 0 ? "row-reverse" : "row",
                alignItems: "center",
                paddingLeft: isMobile ? "40px" : "0",
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  position: "absolute",
                  left: isMobile ? "8px" : "50%",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #ad974f, #8e793e)",
                  border: "4px solid #1a1a1a",
                  transform: isMobile ? "none" : "translateX(-50%)",
                  zIndex: 2,
                  boxShadow: "0 0 15px rgba(173, 151, 79, 0.4)",
                }}
              />

              <Card
                sx={{
                  width: isMobile ? "100%" : "45%",
                  marginLeft: isMobile ? "0" : index % 2 === 0 ? "5%" : "0",
                  marginRight: isMobile ? "0" : index % 2 === 0 ? "0" : "5%",
                  borderRadius: "16px",
                  background: "linear-gradient(145deg, rgba(43, 45, 49, 0.95), rgba(35, 36, 40, 0.95))",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(173, 151, 79, 0.2)",
                  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(173, 151, 79, 0.2)",
                    border: "1px solid rgba(173, 151, 79, 0.4)",
                  },
                }}
              >
                <CardContent sx={{ padding: "24px" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#ad974f",
                      fontWeight: "700",
                      marginBottom: "8px",
                      fontSize: isMobile ? "1.2rem" : "1.4rem",
                    }}
                  >
                    {experience.title}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "#EAEAEA",
                      marginBottom: "4px",
                      fontSize: isMobile ? "1rem" : "1.1rem",
                      fontWeight: "600",
                    }}
                  >
                    {experience.company}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(234, 234, 234, 0.7)",
                      marginBottom: "16px",
                      fontSize: "0.9rem",
                      fontStyle: "italic",
                    }}
                  >
                    {experience.duration} • {experience.location}
                  </Typography>

                  <Box sx={{ marginBottom: "16px" }}>
                    {experience.highlights.map((highlight, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{
                          color: "rgba(234, 234, 234, 0.9)",
                          marginBottom: "8px",
                          fontSize: "0.9rem",
                          lineHeight: 1.6,
                          "&::before": {
                            content: '"•"',
                            color: "#ad974f",
                            marginRight: "8px",
                            fontWeight: "bold",
                          },
                        }}
                      >
                        {highlight}
                      </Typography>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                    }}
                  >
                    {experience.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          background: "linear-gradient(135deg, rgba(173, 151, 79, 0.15), rgba(142, 121, 62, 0.15))",
                          border: "1px solid rgba(173, 151, 79, 0.3)",
                          color: "#ad974f",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          height: "24px",
                          "&:hover": {
                            backgroundColor: "rgba(173, 151, 79, 0.25)",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grow>
        ))}
      </Box>
    </Box>
  );
}

export default ExperienceTimeline;