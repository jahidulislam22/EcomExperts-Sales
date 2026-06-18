export default function GenericCaseStudy({ project }) {
  return (
    <div className="generic-case-study">
      <header className="generic-case-study__header">
        <p className="generic-case-study__eyebrow">Case Study</p>
        <h1>{project.name}</h1>
        <p className="generic-case-study__tagline">{project.tagline}</p>
      </header>

      <section className="generic-case-study__body">
        <p>{project.description}</p>
        <p className="generic-case-study__note">
          This case study is a placeholder. Add a dedicated page component for {project.name} when the full report is ready.
        </p>
      </section>
    </div>
  );
}
