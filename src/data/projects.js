export const projects = [
  {
    slug: "malbon",
    name: "Malbon Golf",
    tagline: "Growth, A/B Testing & Pixel Intelligence",
    description: "90-day growth analysis for a lifestyle golf brand.",
    hasCaseStudy: true,
  },
  {
    slug: "peak-athletics",
    name: "Peak Athletics",
    tagline: "Conversion optimization & retention",
    description: "Performance marketing case study for an athletic apparel brand.",
    hasCaseStudy: true,
  },
  {
    slug: "nova-retail",
    name: "Nova Retail",
    tagline: "Omnichannel commerce strategy",
    description: "Unified storefront and inventory strategy for a multi-brand retailer.",
    hasCaseStudy: true,
  },
  {
    slug: "summit-outdoors",
    name: "Summit Outdoors",
    tagline: "Seasonal demand planning",
    description: "Forecasting and merchandising for an outdoor gear company.",
    hasCaseStudy: true,
  },
  {
    slug: "lumen-beauty",
    name: "Lumen Beauty",
    tagline: "Lifecycle marketing & LTV",
    description: "Email and subscription growth for a DTC beauty brand.",
    hasCaseStudy: true,
  },
  {
    slug: "harbor-home",
    name: "Harbor Home",
    tagline: "Paid media efficiency",
    description: "ROAS improvement across Meta and Google for a home goods brand.",
    hasCaseStudy: true,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
