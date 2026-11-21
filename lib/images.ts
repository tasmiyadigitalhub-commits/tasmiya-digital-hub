import heroStudioImg from "@/src/assets/images/hero_digital_agency_1795253656112.jpg";
import edupilotShowcaseImg from "@/src/assets/images/edupilot_academy_showcase_1795253657954.jpg";
import seoWorkspaceImg from "@/src/assets/images/seo_analytics_workspace_1795253657824.jpg";
import mobileOptimizationImg from "@/src/assets/images/mobile_optimization_design_1795253657953.jpg";
import agencyStudioImg from "@/src/assets/images/agency_collaboration_studio_1795253658475.jpg";

export const siteImages = {
  heroStudio: {
    src: heroStudioImg,
    alt: "Modern digital agency studio desk with a laptop displaying structured web design layouts",
    caption: "Focused digital strategy and responsive web architecture",
  },
  edupilotShowcase: {
    src: edupilotShowcaseImg,
    alt: "Laptop and tablet displaying the EduPilot concept academy website layout with course cards",
    caption: "EduPilot — Concept Academy Platform Showcase",
  },
  seoWorkspace: {
    src: seoWorkspaceImg,
    alt: "Clean desk setup with a site hierarchy notebook and laptop displaying search trend analysis",
    caption: "Technical and on-page search architecture",
  },
  mobileOptimization: {
    src: mobileOptimizationImg,
    alt: "Smartphone and tablet displaying responsive deep purple and white business web layouts",
    caption: "Fast-loading mobile-first web layouts",
  },
  agencyStudio: {
    src: agencyStudioImg,
    alt: "Designer reviewing clean website wireframe grids on a wide studio display",
    caption: "Collaborative design and build workflow",
  },
} as const;
