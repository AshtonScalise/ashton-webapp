export const profile = {
  name: "Ashton Scalise",
  role: "Software Engineer",
  location: "Houston, TX",
  email: "ashtonscalise@gmail.com",
  linkedin: "https://linkedin.com/in/ashton-scalise",
  github: "https://github.com/AshtonScalise",
  headline:
    "Software engineer at TGS. I work on the web apps and AI tools that geophysicists use to build, run and review seismic processing jobs.",
};

export const stats = [
  { value: "4+", label: "years at TGS" },
  { value: "19", label: "repositories" },
  { value: "6", label: "AI agents in production" },
];

export const focus = [
  {
    title: "AI agents",
    body: "Built my team's agent platform on Google ADK and Gemini: agents that review failed processing runs, help build jobs and answer questions inside each app.",
    tags: ["Google ADK", "Gemini", "Evals", "Prompt tooling"],
  },
  {
    title: "Platform & web apps",
    body: "Maintain the web apps used to build, run and monitor processing jobs and to move large datasets between on-prem, AWS and GCP.",
    tags: ["React", "TypeScript", "Next.js", "Python"],
  },
  {
    title: "Delivery",
    body: "A feature usually touches the UI, a Python service, a database migration, the deployment config and the docs, released in stages from dev to production.",
    tags: ["FastAPI", "PostgreSQL", "Kubernetes", "GitOps"],
  },
];

export type Game = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  url?: string;
  cta?: string;
  status: string;
  tech: string[];
  accent: string;
};

export const games: Game[] = [
  {
    name: "Invictum",
    tagline: "Browser battle royale",
    description:
      "A dark-fantasy battle royale where you pick up abilities from the world. Online multiplayer, with bots filling open seats.",
    image: "/images/invictum.jpg",
    imageAlt: "Invictum gameplay: a hero fighting Hollow Sentries in a castle courtyard",
    url: "https://invictum-hollow-reach.fly.dev/",
    cta: "Play",
    status: "Playable",
    tech: ["TypeScript", "three.js", "Node", "WebSockets"],
    accent: "#b98cff",
  },
  {
    name: "Tandem",
    tagline: "Two-player co-op platformer",
    description:
      "A dinosaur and the pteranodon riding on his shoulders. One player hosts in the browser and a friend joins over peer-to-peer.",
    image: "/images/tandem.jpg",
    imageAlt: "Tandem gameplay: Sprout standing in a sunny village clearing",
    url: "https://tandem-coop.fly.dev",
    cta: "Play",
    status: "Prototype",
    tech: ["TypeScript", "three.js", "WebRTC", "Node"],
    accent: "#5fe3a1",
  },
];

export type Job = {
  title: string;
  company: string;
  dates: string;
  location: string;
  summary?: string;
  points: string[];
};

export const jobs: Job[] = [
  {
    title: "Software Engineer",
    company: "TGS (formerly PGS)",
    dates: "Apr 2022 – Present",
    location: "Houston, TX",
    summary: "HPC / seismic processing platform team",
    points: [
      "Designed and shipped the team's AI-agent platform on Google ADK + Gemini: six production agents deployed per environment, sharing memory, auth and tooling through a common library.",
      "Built a log review agent that diagnoses failed processing runs, backed by curated evaluation sets, and a job builder agent with guardrails so it can only take actions the user could.",
      "Shipped tooling that lets domain experts own their prompts, with versioning, model pins, usage tracking and user feedback loops.",
      "Replaced a legacy Qt desktop app with a visual node-graph job editor (1,598 commits), and built a dataset monitor for multi-cloud transfers with manager approval gates (1,235 commits).",
      "Own the Kubernetes/GitOps deployments for my apps across dev, test and prod, with release tooling that keeps broken builds out of production.",
      "Built an AI-assisted release-notes pipeline: an agent drafts patch notes and only the ones I approve publish to each app.",
      "Lead diagnosis of production incidents spanning application code, upstream services and cluster infrastructure.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "Erdos Miller",
    dates: "Mar 2020 – Apr 2022",
    location: "Houston, TX",
    points: [
      "Developed real-time visualization interfaces in Qt and React for MWD (measurement-while-drilling) telemetry.",
      "Added measurement setup and reporting features to Eclipse, a C++/QML desktop app.",
      "Built a full-stack RMA management system integrated with internal tooling and Smartsheet.",
    ],
  },
  {
    title: "Junior QA Engineer",
    company: "Erdos Miller",
    dates: "Sep 2018 – Mar 2020",
    location: "Houston, TX",
    points: [
      "Automated quality reporting in Python for MWD tool testing.",
      "Improved testing frameworks and developer tooling for production codebases.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "C++ / QML"] },
  { group: "Frontend", items: ["React", "Next.js", "Redux Toolkit", "MUI", "React Flow", "three.js"] },
  { group: "Backend", items: ["FastAPI", "Flask", "Node.js", "SQLAlchemy", "Alembic", "PostgreSQL", "RabbitMQ"] },
  { group: "AI", items: ["Google ADK", "Gemini / Vertex AI", "LLM evaluation", "Prompt engineering"] },
  { group: "Infrastructure", items: ["Kubernetes (GKE)", "Argo CD", "Kustomize", "Docker", "GitLab CI", "GCP", "AWS"] },
];

export const education = {
  school: "University of Houston",
  degree: "Bachelor of Science in Psychology",
  year: "2015",
};
