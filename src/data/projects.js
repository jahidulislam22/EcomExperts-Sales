export const projects = [
  {
    slug: "malbon",
    name: "Malbon Golf",
    tagline: "Growth, A/B Testing & Pixel Intelligence",
    description: "90-day growth analysis for a lifestyle golf brand.",
    hasCaseStudy: true,
  },
  {
    slug: "pet-planet",
    name: "Pet Planet",
    tagline: "The franchise operating layer Shopify doesn't ship",
    description: "47-store Canadian pet franchise — custom IMS, migration, and reporting on Shopify POS.",
    hasCaseStudy: true,
  },
  {
    slug: "legends",
    name: "Legends",
    tagline: "Analytics, CRO & Conversion Growth",
    description: "90-day performance analysis — CVR lift, social acquisition, Luka line dominance, and inventory risk.",
    hasCaseStudy: true,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
