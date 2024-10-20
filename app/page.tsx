import { Container, Box, Typography, Paper } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ overflowY: "auto", height: "100%" }}>
      <Box sx={{ my: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          I'm Ashton
        </Typography>
        <Typography variant="body1" paragraph>
          This is my resume / portfolio. Many things to come; I will keep
          updating it over time.
        </Typography>
        <Typography variant="body1" paragraph>
          Hello World!
        </Typography>
      </Box>
    </Container>
  );
}
