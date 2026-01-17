import {
  Container,
  Box,
  Typography,
  Divider,
  Link,
  Stack,
  List,
  ListItem,
} from "@mui/material";
import { Duration } from "./components/Duration";

export default function Home() {
  return (
    <Container sx={{ height: "100%", width: "100%", py: 4, mb: 10 }}>
      <Box sx={{ width: "100%", py: 4, mb: 10 }}>
        {/* Header */}
        <Typography variant="h3" component="h1" gutterBottom>
          Ashton Scalise
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Software Engineer
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Experience */}
        <Typography variant="h5" component="h2" gutterBottom>
          Experience
        </Typography>

        {/* TGS */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6">Software Engineer — TGS</Typography>
          <Typography variant="body2" color="text.secondary">
            Apr 2022 – Present · Houston, TX
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Duration: <Duration start={new Date("2022-04-01")} />
          </Typography>
          <List dense>
            <ListItem>
              Modernized a legacy Qt desktop app into a cloud-native,
              cross-platform system using React and Next.js.
            </ListItem>
            <ListItem>
              Built FlowBuilder, a full-stack visual pipeline tool for
              geophysicists to create and execute data transformations.
            </ListItem>
            <ListItem>
              Designed and implemented RESTful APIs with Flask for CRUD
              operations against legacy systems.
            </ListItem>
            <ListItem>
              Developed Node.js middleware for validation and JSON Schema-based
              transformations.
            </ListItem>
            <ListItem>
              Engineered scalable GUI for managing petabytes of seismic data
              across GCP and on-prem systems.
            </ListItem>
            <ListItem>
              Collaborated on CI/CD pipelines, Kubernetes deployments, and
              multi-environment cloud infrastructure.
            </ListItem>
          </List>
          <Typography variant="body2">
            <strong>Tech:</strong> TypeScript, React, Next.js, Node.js, Flask,
            FastAPI, PostgreSQL, GCP, Kubernetes, Docker, GitLab CI/CD
          </Typography>
        </Box>

        {/* Erdos Miller SE */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6">Software Engineer — Erdos Miller</Typography>
          <Typography variant="body2" color="text.secondary">
            Mar 2020 – Apr 2022 · Houston, TX
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Duration
              start={new Date("2020-03-01")}
              end={new Date("2022-04-01")}
            />
          </Typography>
          <List dense>
            <ListItem>
              Developed real-time visualization interfaces in Qt and React for
              MWD telemetry.
            </ListItem>
            <ListItem>
              Integrated live backend data streams and device telemetry with
              frontend components.
            </ListItem>
            <ListItem>
              Built a full-stack RMA management system with React frontends,
              internal tooling, and Smartsheet APIs.
            </ListItem>
          </List>
          <Typography variant="body2">
            <strong>Tech:</strong> React, Qt, Python, Smartsheet API, SQL
          </Typography>
        </Box>

        {/* Erdos Miller QA */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6">QA Engineer — Erdos Miller</Typography>
          <Typography variant="body2" color="text.secondary">
            Sep 2018 – Mar 2020 · Houston, TX
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Duration
              start={new Date("2018-09-01")}
              end={new Date("2020-03-01")}
            />
          </Typography>
          <List dense>
            <ListItem>
              Automated PDF reporting using Python to streamline MWD tool
              quality workflows.
            </ListItem>
            <ListItem>
              Improved developer tooling and collaborated on testing frameworks
              for production codebases.
            </ListItem>
          </List>
          <Typography variant="body2">
            <strong>Tech:</strong> Python, MWD Tool Testing, Qt
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Projects */}
        <Typography variant="h5" component="h2" gutterBottom>
          Projects
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">DMON</Typography>
          <List dense>
            <ListItem>
              Led frontend development for a scalable web app monitoring
              geophysical data in real time.
            </ListItem>
            <ListItem>
              Integrated alerting systems and live data pipelines with backend
              teams.
            </ListItem>
          </List>
          <Typography variant="body2" color="text.secondary">
            React, TypeScript, Node.js, Next.js
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">JobBuilderWeb</Typography>
          <List dense>
            <ListItem>
              Built a dynamic Figma-like UI for creating and managing
              geophysical jobs.
            </ListItem>
            <ListItem>
              Ensured scalability and smooth UX across cloud environments.
            </ListItem>
          </List>
          <Typography variant="body2" color="text.secondary">
            React, TypeScript, Kubernetes, Docker, GCP
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Eclipse</Typography>
          <List dense>
            <ListItem>
              Developed a setup wizard for accurate MWD measurements, enhancing
              usability and precision.
            </ListItem>
            <ListItem>
              Implemented exportable PDF reports and refined UI components.
            </ListItem>
          </List>
          <Typography variant="body2" color="text.secondary">
            C++, QML
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Education */}
        <Typography variant="h5" component="h2" gutterBottom>
          Education
        </Typography>
        <Typography variant="subtitle1">
          University of Houston — Bachelor of Science in Psychology
        </Typography>
        <Typography variant="body2" color="text.secondary">
          2015 · Houston, TX
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Skills */}
        <Typography variant="h5" component="h2" gutterBottom>
          Technical Skills
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>Languages:</strong> JavaScript, TypeScript, Python, SQL
          (Postgres)
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>Backend:</strong> Node.js, Next.js, Flask
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>Frontend:</strong> React, Qt, MUI, Reactflow, Chart.js
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>Infrastructure:</strong> Docker, Kubernetes, GitLab CI/CD,
          GCP, AWS, ArgoCD
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>Data & Scripting:</strong> pandas, NumPy, Matplotlib
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>Tools:</strong> Git, Smartsheet API, Lockrocket, Jest
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Contact */}
        <Typography variant="h5" component="h2" gutterBottom>
          Contact
        </Typography>
        <Stack spacing={1}>
          <Link href="mailto:ashtonscalise@gmail.com" underline="hover">
            ashtonscalise@gmail.com
          </Link>
          <Link
            href="https://linkedin.com/in/ashton-scalise"
            target="_blank"
            underline="hover"
          >
            linkedin.com/in/ashton-scalise
          </Link>
          <Link
            href="https://github.com/AshtonScalise"
            target="_blank"
            underline="hover"
          >
            github.com/AshtonScalise
          </Link>
        </Stack>
      </Box>
    </Container>
  );
}
