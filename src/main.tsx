import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { credentials, education, experiences, focusAreas, profile, projects, skills, type Project } from "./data";
import "./styles.css";

function useHashProject() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return hash.startsWith("#project/") ? hash.replace("#project/", "") : null;
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {text && <span>{text}</span>}
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Go to home">
        <span>PKG</span>
        <strong>Praveen Kumar</strong>
      </a>
      <nav>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Engineering Data Science / Machine Learning / Asset Management Analytics</p>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn" href="#experience">View Experience</a>
          <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
          <a className="btn text" href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
      <aside className="hero-card">
        <span className="status-dot">Open to Fall Internships</span>
        <h3>Target Roles</h3>
        <div className="tag-list">
          {profile.targetRoles.map((role) => <span key={role}>{role}</span>)}
        </div>
        <div className="metric-grid">
          <div><strong>500+</strong><small>students supported</small></div>
          <div><strong>50K+</strong><small>road images processed</small></div>
          <div><strong>20K+</strong><small>wells analyzed</small></div>
          <div><strong>IEEE</strong><small>published research</small></div>
        </div>
      </aside>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <SectionTitle
        eyebrow="Profile"
        title="I connect machine learning, analytics, and practical operations."
        text="My work sits at the intersection of data science and real-world systems: cleaning messy data, building models, creating deployable workflows, and communicating results clearly."
      />
      <div className="focus-grid">
        {focusAreas.map((item) => (
          <article className="focus-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle eyebrow="Experience" title="Applied analytics experience" text="Hands-on experience in asset management analytics, machine learning support, reporting readiness, and technical mentoring." />
      <div className="timeline">
        {experiences.map((item) => (
          <article className="timeline-item" key={item.role}>
            <div>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
              <small>{item.location}</small>
            </div>
            <div>
              <span className="pill">{item.period}</span>
              <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <p className="project-category">{project.category}</p>
      <h3><a href={`#project/${project.slug}`}>{project.title}</a></h3>
      <p>{project.summary}</p>
      <div className="tag-list compact">{project.tech.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}</div>
      <div className="project-links">
        <a href={`#project/${project.slug}`}>Read details</a>
        {project.github && project.github !== "#" && <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
        {project.demo && project.demo !== "#" && <a href={project.demo} target="_blank" rel="noreferrer">Live demo</a>}
      </div>
    </article>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <section className="project-detail section">
      <a className="back-link" href="#projects">Back to all projects</a>
      <p className="project-category">{project.category}</p>
      <h1>{project.title}</h1>
      <p className="lead">{project.summary}</p>
      <div className="detail-grid">
        <div className="detail-panel">
          <h2>Problem</h2>
          <p>{project.problem}</p>
        </div>
        <div className="detail-panel">
          <h2>Tools</h2>
          <div className="tag-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </div>
      </div>
      <div className="detail-panel wide">
        <h2>Impact</h2>
        <ul>{project.impact.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <div className="hero-actions">
        {project.github && project.github !== "#" && <a className="btn primary" href={project.github} target="_blank" rel="noreferrer">Open GitHub</a>}
        {project.demo && project.demo !== "#" && <a className="btn" href={project.demo} target="_blank" rel="noreferrer">Open Demo</a>}
        <a className="btn" href={`mailto:${profile.email}?subject=Question about ${project.title}`}>Discuss this project</a>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle eyebrow="Projects" title="Selected technical projects" text="A focused view of projects across asset management analytics, computer vision, oil and gas analytics, machine learning, and full-stack development." />
      <div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section split-section">
      <div>
        <SectionTitle eyebrow="Skills" title="Technical toolkit" text="Grouped for quick scanning by recruiters and hiring managers." />
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.group}>
            <h3>{skill.group}</h3>
            <div className="tag-list compact">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section">
      <SectionTitle eyebrow="Education" title="Academic background" />
      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.school}>
            <span>{item.period}</span>
            <h3>{item.school}</h3>
            <p>{item.degree}</p>
            <small>{item.location}</small>
            <p className="coursework">Relevant coursework: {item.coursework}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="section credentials-section">
      <SectionTitle eyebrow="Research & Recognition" title="Publications, certifications, and applied work" />
      <div className="credential-list">
        {credentials.map((item) => <p key={item}>{item}</p>)}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let’s connect</h2>
        <p>I am interested in fall internship opportunities where I can apply data science, machine learning, AI, data engineering, and analytics to real operational problems, especially in maritime, asset management, oil and gas, healthcare, and infrastructure domains.</p>
      </div>
      <div className="contact-card">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a>
        <a href={profile.linkedin}>LinkedIn</a>
        <a href={profile.github}>GitHub</a>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Credentials />
      <Contact />
    </>
  );
}

function App() {
  const slug = useHashProject();
  const selectedProject = useMemo(() => projects.find((project) => project.slug === slug), [slug]);
  return (
    <>
      <Header />
      <main>{selectedProject ? <ProjectDetail project={selectedProject} /> : <Home />}</main>
      <footer>© {new Date().getFullYear()} {profile.name}. Data Science • Machine Learning • Asset Management Analytics</footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
