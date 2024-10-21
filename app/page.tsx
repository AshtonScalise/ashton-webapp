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
  const erdosEndDate: Date = new Date("2022-04-01"); // Ended when you joined TGS

  return (
    <Container sx={{ overflowY: "auto", height: "100%" }}>
      <Box sx={{ my: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Ashton
        </Typography>
        <Typography variant="body1" paragraph>
          Software Engineer with over 5 years of experience delivering
          high-performance, scalable web applications. Proficient in building
          responsive UIs, developing microservices, and designing RESTful APIs
          with a focus on maintainability and scalability. Skilled in modern
          JavaScript frameworks like React and TypeScript, with a strong
          emphasis on component-driven architecture and state management. Adept
          at optimizing front-end performance, implementing CI/CD pipelines, and
          leveraging cloud services to drive continuous integration and
          deployment in hybrid work environments.
        </Typography>

        {/* TGS + PGS Experience */}
        <Typography variant="h6" component="h2" gutterBottom>
          Software Engineer at TGS
        </Typography>
        <Typography variant="body2" paragraph>
          Full-time | Apr 2022 - Present | Houston, Texas, United States
          (Hybrid)
        </Typography>
        <Typography variant="body1" paragraph>
          {`Duration: ${calculateDuration(tgsStartDate, tgsEndDate)}`}
        </Typography>
        <Typography variant="body1" paragraph>
          Lead frontend developer for Job Builder, an internal React web
          application used by geophysicists. The app featured a Figma-like UI,
          allowing for dynamic job creation and management. Worked closely with
          cross-functional teams to deliver features, and ensure optimal user
          experience.
        </Typography>
        <Typography variant="body1" paragraph>
          Technologies: React, TypeScript, Kubernetes, Docker, GitLab CI/CD, GCP
        </Typography>

        {/* Erdos Miller */}
        <Typography variant="h6" component="h2" gutterBottom>
          Software Engineer at Erdos Miller
        </Typography>
        <Typography variant="body2" paragraph>
          {`Full-time | ${calculateDuration(erdosStartDate, erdosEndDate)}`}
        </Typography>
        <Typography variant="body2" paragraph>
          Software Engineer | Mar 2020 - Apr 2022
        </Typography>
        <Typography variant="body1" paragraph>
          Developed frontend systems in Qt and React, focusing on displaying
          real-time data from MWD (Measurement While Drilling) tools for
          drilling operations. Collaborated with backend engineers to integrate
          live data streams.
        </Typography>
        <Typography variant="body1" paragraph>
          Built a custom web frontend for managing RMA requests, connecting with
          company databases like Smartsheet.
        </Typography>
        <Typography variant="body1" paragraph>
          Technologies: React, Qt, Smartsheet API
        </Typography>

        <Typography variant="body2" paragraph>
          QA Engineer | Sep 2018 - Mar 2020
        </Typography>
        <Typography variant="body1" paragraph>
          Played a hybrid role, contributing to both software development and
          quality assurance. Developed Python scripts to programmatically
          generate PDF reports for MWD tool testing, creating an automated paper
          trail for quality control. Added features to existing codebase for
          interfacing with tool
        </Typography>
        <Typography variant="body1" paragraph>
          Actively involved in developing test cases and collaborating with the
          software team to ensure smooth testing and deployment processes.
        </Typography>
        <Typography variant="body1" paragraph>
          Technologies: Python, MWD Tool Testing
        </Typography>
      </Box>
    </Container>
  );
}
