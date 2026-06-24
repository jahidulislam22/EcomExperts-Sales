import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import MalbonCaseStudy from "./MalbonCaseStudy";
import PetPlanetCaseStudy from "./PetPlanetCaseStudy";
import GenericCaseStudy from "./GenericCaseStudy";

const caseStudyComponents = {
  malbon: MalbonCaseStudy,
  "pet-planet": PetPlanetCaseStudy,
};

export default function CaseStudyPage() {
  const { projectSlug } = useParams();
  const project = getProjectBySlug(projectSlug);
  const CaseStudy = project ? caseStudyComponents[project.slug] : null;

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

      {CaseStudy ? <CaseStudy /> : <GenericCaseStudy project={project} />}
    </div>
  );
}
