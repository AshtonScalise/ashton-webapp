import Image from "next/image";
import { Effects } from "./effects";
import { education, focus, games, jobs, profile, skills, stats } from "./content";

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Mail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.84 2.55 4.84 5.87V21h-4v-5.1c0-1.22-.02-2.8-1.7-2.8-1.72 0-1.980 1.33-1.98 2.71V21h-4V9.75Z" />
  </svg>
);

const GitHub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.160-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.030-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Effects />
      <div className="backdrop" aria-hidden="true">
        <div className="grid" />
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="spotlight" />
      </div>

      <header className="nav">
        <a href="#top" className="brand" aria-label="Back to top">
          <span className="brand-mark">AS</span>
          <span className="brand-name">{profile.name}</span>
        </a>
        <nav className="nav-links" aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
        <a href="#contact" className="btn btn-small">
          Contact
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow reveal">
            <span className="pulse" /> {profile.location}
          </p>
          <h1 className="reveal">{profile.name}</h1>
          <p className="hero-role reveal">
            <span className="gradient-text">{profile.role}</span>
          </p>
          <p className="lede reveal">{profile.headline}</p>
          <div className="hero-actions reveal">
            <a href="#experience" className="btn btn-primary">
              Experience
            </a>
            <a href="#contact" className="btn">
              Contact
            </a>
          </div>
          <ul className="stats reveal" aria-label="At a glance">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="work" className="section">
          <div className="section-head reveal">
            <p className="kicker">Work</p>
            <h2>What I work on</h2>
          </div>
          <div className="cards">
            {focus.map((f, i) => (
              <article className="card reveal" key={f.title} style={{ transitionDelay: `${i * 80}ms` }}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
                <ul className="tags">
                  {f.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-head reveal">
            <p className="kicker">Experience</p>
            <h2>Where I&apos;ve worked</h2>
          </div>
          <ol className="timeline">
            {jobs.map((j) => (
              <li className="job reveal" key={`${j.company}-${j.title}`}>
                <div className="job-meta">
                  <span className="job-dates">{j.dates}</span>
                  <span className="job-loc">{j.location}</span>
                </div>
                <div className="job-body">
                  <h3>
                    {j.title} <span className="at">· {j.company}</span>
                  </h3>
                  {j.summary && <p className="job-summary">{j.summary}</p>}
                  <ul>
                    {j.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <div className="edu reveal">
            <span className="kicker">Education</span>
            <p>
              <strong>{education.school}</strong> · {education.degree} · {education.year}
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-head reveal">
            <p className="kicker">Skills</p>
            <h2>Tools I use</h2>
          </div>
          <div className="skills">
            {skills.map((s) => (
              <div className="skill-group reveal" key={s.group}>
                <h3>{s.group}</h3>
                <ul className="tags">
                  {s.items.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-head reveal">
            <p className="kicker">Side projects</p>
            <h2>Games</h2>
            <p className="section-sub">A couple of browser games I work on in my spare time.</p>
          </div>
          <div className="projects">
            {games.map((g) => (
              <article className="project reveal" key={g.name} style={{ ["--accent" as string]: g.accent }}>
                <a className="project-art" href={g.url} target="_blank" rel="noopener noreferrer" aria-label={`Play ${g.name}`}>
                  <Image src={g.image} alt={g.imageAlt} fill sizes="(max-width: 900px) 100vw, 40vw" />
                </a>
                <div className="project-body">
                  <div className="project-title">
                    <h3>{g.name}</h3>
                    <span className="project-status">{g.status}</span>
                  </div>
                  <p className="project-tagline">{g.tagline}</p>
                  <p>{g.description}</p>
                  <div className="project-foot">
                    <ul className="tags">
                      {g.tech.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    {g.url && (
                      <a className="project-link" href={g.url} target="_blank" rel="noopener noreferrer">
                        {g.cta} <Arrow />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact reveal">
          <p className="kicker">Contact</p>
          <h2>Get in touch</h2>
          <p className="section-sub">Email or LinkedIn is the best way to reach me.</p>
          <div className="contact-links">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <Mail /> {profile.email}
            </a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedIn /> LinkedIn
            </a>
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
              <GitHub /> GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
