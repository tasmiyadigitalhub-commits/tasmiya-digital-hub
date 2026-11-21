import heroStudioImg from "@/src/assets/images/hero_digital_agency_1795253656112.jpg";
import edupilotShowcaseImg from "@/src/assets/images/edupilot_academy_showcase_1795253657954.jpg";
import seoWorkspaceImg from "@/src/assets/images/seo_analytics_workspace_1795253657824.jpg";
import mobileOptimizationImg from "@/src/assets/images/mobile_optimization_design_1795253657953.jpg";
import agencyStudioImg from "@/src/assets/images/agency_collaboration_studio_1795253658475.jpg";

export const siteImages = {
  heroStudio: {
    src: heroStudioImg,
    alt: "Tasmiya Digital Hub digital marketing agency studio desk with a laptop displaying structured website design layouts",
    caption: "Focused digital strategy and responsive website design",
  },
  edupilotShowcase: {
    src: edupilotShowcaseImg,
    alt: "Laptop and tablet displaying the EduPilot concept demo academy website design with structured course cards",
    caption: "EduPilot — Concept Demo Academy Platform",
  },
  seoWorkspace: {
    src: seoWorkspaceImg,
    alt: "Workspace desk with site hierarchy notebook and laptop showing SEO services search traffic and analytics charts",
    caption: "Technical and on-page SEO services architecture",
  },
  mobileOptimization: {
    src: mobileOptimizationImg,
    alt: "Smartphone and tablet displaying responsive deep purple and white website design layouts for mobile optimization",
    caption: "Fast-loading mobile-first website design",
  },
  agencyStudio: {
    src: agencyStudioImg,
    alt: "Digital marketing agency designer reviewing clean website design wireframes on a studio monitor",
    caption: "Collaborative website design and marketing workflow",
  },
} as const;
