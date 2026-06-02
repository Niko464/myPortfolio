// Central place for personal links. Drop an updated PDF at public/resume.pdf
// to refresh the "Résumé" button.
export const SITE = {
  name: "Nikolaj De Smet",
  role: "Fullstack Web & DevOps Engineer",
  email: "desmet.informatique@gmail.com",
  github: "https://github.com/Niko464",
  linkedin: "https://www.linkedin.com/in/nikolaj-de-smet-3417b51a1/",
  resume: process.env.PUBLIC_URL + "/resume.pdf",
  formspree: "https://formspree.io/f/xvongwbz",
};

export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const STATS = [
  { value: "3+ yrs", label: "Shipping production apps" },
  { value: "Lead", label: "Engineer @ LiveLinx" },
  { value: "12+", label: "Personal projects" },
  { value: "4", label: "Languages spoken" },
];

export const LANGUAGES = [
  { name: "Dutch", level: "Native" },
  { name: "French", level: "Native" },
  { name: "English", level: "C1/C2" },
  { name: "Spanish", level: "Basic" },
];
