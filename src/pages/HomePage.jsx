import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function HomePage() {
  return (
    <div className="home-page">
      <header className="home-page__header">
        <p className="home-page__eyebrow">EcomExperts-Sales</p>
        <h1>Project Case Studies</h1>
        <p className="home-page__intro">
          Select a project to view its growth and experimentation case study.
        </p>
      </header>

      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <Link to={`/case-study/${project.slug}`} className="project-card">
              <span className="project-card__index">{String(index + 1).padStart(2, "0")}</span>
              <div className="project-card__content">
                <h2>{project.name}</h2>
                <p>{project.tagline}</p>
              </div>
              <span className="project-card__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
