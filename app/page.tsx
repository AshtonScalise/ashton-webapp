import { Container, Box, Typography } from "@mui/material";

// Helper function to calculate the duration
const calculateDuration = (
  start: Date = new Date(),
  end: Date = new Date()
): string => {
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();

  const totalMonths = years * 12 + months;
  const displayYears = Math.floor(totalMonths / 12);
  const displayMonths = totalMonths % 12;

  return `${displayYears} yrs ${displayMonths} mos`;
};

export default function Home() {
  const tgsStartDate: Date = new Date("2022-04-01");
  const tgsEndDate: Date = new Date(); // Current date for active role
  const erdosStartDate: Date = new Date("2018-09-01");
  const erdosEndDate: Date = new Date("2022-04-01"); // Ended when you joined PGS

  return (
    <Container sx={{ overflowY: "auto", height: "100%" }}>
      <Box sx={{ my: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          I&aposm Ashton
        </Typography>
        <Typography variant="body1" paragraph>
          Software Engineer with over 5 years of experience in developing
          responsive frontends, microservices, and RESTful APIs.
        </Typography>

        {/* TGS + PGS Experience */}
        <Typography variant="h6" component="h2" gutterBottom>
          Software Engineer at TGS (formerly PGS)
        </Typography>
        <Typography variant="body2" paragraph>
          Full-time | Apr 2022 - Present | Houston, Texas, United States
          (Hybrid)
        </Typography>
        <Typography variant="body1" paragraph>
          {`Duration: ${calculateDuration(tgsStartDate, tgsEndDate)}`}
        </Typography>
        <Typography variant="body1" paragraph>
          TGS merged with PGS in July 2024. I continued in my role as a Software
          Engineer, contributing to the integration and enhancement of
          company-wide projects.
        </Typography>

        {/* Erdos Miller */}
        <Typography variant="h6" component="h2" gutterBottom>
          Erdos Miller
        </Typography>
        <Typography variant="body2" paragraph>
          {`Full-time | ${calculateDuration(erdosStartDate, erdosEndDate)}`}
        </Typography>

        <Typography variant="body2" paragraph>
          Software Engineer | Mar 2020 - Apr 2022
        </Typography>
        <Typography variant="body2" paragraph>
          QA Engineer | Sep 2018 - Mar 2020
        </Typography>
      </Box>
    </Container>
  );
}
