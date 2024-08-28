import { Card, CardContent, Link, Typography, useMediaQuery } from "@mui/material";

const ContactCard = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Card
      sx={{
        width: isMobile ? "70vw" : "50vw",
        height: "40%",
        backgroundColor: "var(--dark-background-color)",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: " 100px",
        marginBottom: "30vh",
        padding: "1rem 2rem",
        zIndex: 999,
        outline: "solid 5px var(--secondary-gold)",
      }}
    >
      <Typography variant="h2" color="primary" align="center">
        Connect
      </Typography>
      <CardContent
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Typography variant="body1">Email: </Typography>
        <Typography variant="body1" color="inherit" noWrap>
          &nbsp;
        </Typography>
        <Typography variant="body1">gilljaskirat04@gmail.com</Typography>
      </CardContent>
      <CardContent
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Typography variant="body1">LinkedIn: </Typography>
        <Typography variant="body1" color="inherit" noWrap>
          &nbsp;
        </Typography>
        <Link variant="body1" href="https://www.linkedin.com/in/jaskirat-s-gill/" color="inherit" underline="none">/in/jaskirat-gill</Link>
      </CardContent>
      <CardContent
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Typography variant="body1">Github: </Typography>
        <Typography variant="body1" color="inherit" noWrap>
          &nbsp;
        </Typography>
        <Link variant="body1" href="https://github.com/jaskirat-gill" color="inherit" underline="none">github.com/jaskirat-gill</Link>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
