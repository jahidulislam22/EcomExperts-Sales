import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import MalbonCaseStudy from "./MalbonCaseStudy";
import GenericCaseStudy from "./GenericCaseStudy";

export default function CaseStudyPage() {
  const { projectSlug } = useParams();
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="case-study-page">
      <div className="case-study-page__nav">
        <Link to="/" className="case-study-page__back">
          ← All projects
        </Link>
      </div>

      {project.slug === "malbon" ? (
        <MalbonCaseStudy />
      ) : (
        <GenericCaseStudy project={project} />
      )}
    </div>
  );
}
