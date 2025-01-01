const aboutLink = document.getElementById("about-link");
const projectsLink = document.getElementById("projects-link");
const skillsLink = document.getElementById("skills-link");
const contactLink = document.getElementById("contact-link");
const languageSelect = document.getElementById("language-select");
const greeting = document.getElementById("greeting");
const linksNote = document.getElementById("links-note");
const aboutHeading = document.getElementById("about-heading");
const aboutDescription = document.getElementById("about-description");
const projectsHeading = document.getElementById("projects-heading");
const projectsDescription = document.getElementById("projects-description");
const skillsHeading = document.getElementById("skills-heading");
const skillsDescription = document.getElementById("skills-description");
const contactHeading = document.getElementById("contact-heading");
const contactSendMe = document.getElementById("contact-send-me");
const contactReachMe = document.getElementById("contact-reach-me");

languageSelect.addEventListener("change", (e) => {
  localStorage.setItem("lang", e.target.value);
  loadText();
});

const translations = {
  en: {
    about: "about",
    aboutDescription:
      "i'm dedicated and passionate computer science student, seeking to gain more programming experience and face new challenges",
    projects: "projects",
    projectsDescription:
      "i'm into open-source, so all of my projects are available on",
    skills: "skills",
    skillsDescription: "there are languages and tools that i use",
    contact: "contact",
    contactEmail: "feel free to send me",
    contactSocials: "or reach me on my socials",
    greeting: "hello, i'm wkktoria! 👋",
    linksNote: "note: all the links below open in new tabs",
  },
  pl: {
    about: "o mnie",
    aboutDescription:
      "jestem zaangażowaną i pełną pasji studentką informatyki, która chce zdobyć więcej doświadczenia w programowaniu i stawić czoła nowym wyzwaniom",
    projects: "projekty",
    projectsDescription:
      "jestem zwolenniczką open-source, dlatego wszystkie moje projekty są dostępne na",
    skills: "umiejętności",
    skillsDescription: "języki programowania i narzędzia, których używam",
    contact: "kontakt",
    contactEmail: "możesz wysłać mi",
    contactSocials:
      "lub skontaktować się ze mną na moich portalach społecznościowych",
    greeting: "cześć, jestem wkktoria! 👋",
    linksNote: "uwaga: wszystkie linki poniżej otwierają się w nowych kartach",
  },
};

const updateLanguageTag = () => {
  const language = localStorage.getItem("lang") ?? "en";
  document.documentElement.setAttribute("lang", language);
}

const i18n = (key) => {
  const language = localStorage.getItem("lang") ?? "en";
  return translations[language][key];
};

const loadText = () => {
  updateLanguageTag();

  aboutLink.innerText = i18n("about");
  projectsLink.innerText = i18n("projects");
  skillsLink.innerText = i18n("skills");
  contactLink.innerText = i18n("contact");

  greeting.innerText = i18n("greeting");

  linksNote.innerText = i18n("linksNote");

  aboutHeading.innerText = i18n("about");
  aboutDescription.innerText = i18n("aboutDescription");

  projectsHeading.innerText = i18n("projects");
  projectsDescription.innerText = i18n("projectsDescription");

  skillsHeading.innerText = i18n("skills");
  skillsDescription.innerText = i18n("skillsDescription");

  contactHeading.innerText = i18n("contact");
  contactSendMe.innerText = i18n("contactEmail");
  contactReachMe.innerText = i18n("contactSocials");
};

if (localStorage.getItem("lang") === "en") {
  languageSelect[0].selected = true;
} else if (localStorage.getItem("lang") === "pl") {
  languageSelect[1].selected = true;
}

loadText();
