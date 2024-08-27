import { Card, CardContent, Link, Typography } from "@mui/material";

const ContactCard = () => {
  return (
    <Card
      sx={{
        width: "50vw",
        minWidth: "600px",
        height: "40%",
        backgroundColor: "var(--dark-background-color)",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: " 100px",
        marginBottom: "30vh",
        padding: "1rem 2rem",
        zIndex: 999
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
