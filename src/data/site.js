// Central place for personal links. Update LINKEDIN and drop a PDF at
// public/resume.pdf to enable the "Résumé" button.
export const SITE = {
  name: "Nikolaj De Smet",
  github: "https://github.com/Niko464",
  linkedin: "https://www.linkedin.com/in/nikolaj-de-smet",
  resume: process.env.PUBLIC_URL + "/resume.pdf",
  formspree: "https://formspree.io/f/xvongwbz",
};

export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const STATS = [
  { value: "12+", label: "Projects shipped" },
  { value: "5 yrs", label: "Epitech engineering" },
  { value: "1 yr", label: "Tsinghua, Beijing" },
  { value: "∞", label: "Things to learn" },
];
