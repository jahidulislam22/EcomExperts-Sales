export const projects = [
  {
    slug: "malbon",
    name: "Malbon Golf",
    tagline: "Growth, A/B Testing & Pixel Intelligence",
    description: "90-day growth analysis for a lifestyle golf brand.",
    hasCaseStudy: true,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
