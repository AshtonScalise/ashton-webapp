import {
  Container,
  Box,
  Typography,
  Divider,
  Link,
  Stack,
} from "@mui/material";
import { Duration } from "./components/Duration";

export default function Home() {
  return (
    <Container sx={{ height: "100%", width: "100%", py: 4, mb: 10 }}>
      <Box sx={{ width: "100%", py: 4, mb: 10 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Ashton Scalise
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Full-Stack Engineer
        </Typography>
        <Typography variant="body1" paragraph>
          I build scalable, resilient systems from UI to infrastructure. With a
          focus on performance and user experience, I also architect APIs, cloud
          deployments, and CI/CD pipelines to support fast iteration and
          reliable delivery.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Experience */}
        <Typography variant="h5" component="h2" gutterBottom>
          Experience
        </Typography>

        {/* TGS */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Software Engineer – TGS</Typography>
          <Typography variant="body2" color="text.secondary">
            Nov 2022 – Present · Houston, TX (Hybrid)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Duration: <Duration start={new Date("2022-11-01")} />
          </Typography>
          <Typography variant="body1" paragraph sx={{ mt: 1 }}>
            Spearheaded modernization of a legacy Qt desktop tool into a
            cloud-native web platform using React and Next.js. Developed
            middleware in Node.js to validate inputs and orchestrate data
            processing. Designed FlowBuilder, a visual pipeline builder for
            geophysicists, and built a GUI to manage petabytes of seismic data
            across on-prem and GCP infrastructure.
          </Typography>
          <Typography variant="body2">
            <strong>Tech:</strong> React, Next.js, TypeScript, Node.js, GCP,
            Kubernetes, Docker, GitLab CI/CD
          </Typography>
        </Box>

        {/* Erdos Miller */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Software Engineer – Erdos Miller</Typography>
          <Typography variant="body2" color="text.secondary">
            Mar 2020 – Apr 2022 · Houston, TX
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Duration
              start={new Date("2020-03-01")}
              end={new Date("2022-04-01")}
            />
          </Typography>
          <Typography variant="body1" paragraph sx={{ mt: 1 }}>
            Developed full-stack applications using Qt and React for real-time
            MWD data visualization. Integrated backend data streams and designed
            a custom RMA management platform interfacing with Smartsheet and
            internal systems.
          </Typography>
          <Typography variant="body2">
            <strong>Tech:</strong> React, Qt, Python, Smartsheet API, SQL
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1">
            QA Engineer – Erdos Miller
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sep 2018 – Mar 2020
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Duration
              start={new Date("2018-09-01")}
              end={new Date("2020-03-01")}
            />
          </Typography>
          <Typography variant="body1" paragraph sx={{ mt: 1 }}>
            Automated PDF report generation using Python to support quality
            control in MWD testing. Enhanced test interfaces and contributed
            features to production codebases.
          </Typography>
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
          <Typography variant="body2">
            Real-time geophysical monitoring platform with live data pipelines
            and alerting system.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React, TypeScript, Node.js, Next.js
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">JobBuilderWeb</Typography>
          <Typography variant="body2">
            Figma-like internal tool for geophysical job creation and
            management; focused on scalable, intuitive UI and cloud integration.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React, TypeScript, Docker, Kubernetes, GCP
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1">Eclipse</Typography>
          <Typography variant="body2">
            Qt-based MWD setup wizard with enhanced accuracy, exportable PDF
            reports, and improved UI usability.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            C++, QML, Python
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Skills */}
        <Typography variant="h5" component="h2" gutterBottom>
          Technical Skills
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>Languages:</strong> JavaScript, TypeScript, Python, SQL
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>Frameworks:</strong> React, Next.js, Node.js, Flask, Qt
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>DevOps / Cloud:</strong> Docker, Kubernetes, GitLab CI/CD,
          GCP, AWS, ArgoCD
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>Other:</strong> pandas, NumPy, MUI, Jest, Chart.js, Reactflow
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
