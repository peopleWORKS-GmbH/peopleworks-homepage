export type Locale = "de" | "en";

export const defaultLocale: Locale = "de";

export const texts = {
  de: {
    nav: { services: "Leistungen", about: "Über mich", contact: "Kontakt" },
    hero: {
      title: "Sparringspartner in HR Fragen",
      name: "Christoph Küffer",
      tagline: "Erfahren. Pragmatisch. Wirkungsvoll.",
    },
    services: {
      title: "Meine Beratungsschwerpunkte",
      items: [
        {
          title: "HR Transformation",
          content:
            "Automatisierung, KI, Data-Driven HR und People Analytics prägen die Zusammenarbeit und definieren die Rolle der Personalabteilung neu. Ich helfe, Klarheit zu gewinnen und die HR-Organisation zukunftssicher auszurichten.",
        },
        {
          title: "HR Verstärkung",
          content:
            "In Phasen des Umbruchs fehlt oft Kapazität oder neutrale Führung. Ich sichere operative Kontinuität und entlaste dein Team mit einem klaren Blick von außen.",
        },
        {
          title: "Skills ins Zentrum stellen",
          content:
            "Ein skill-basierter Ansatz erhöht Erfolgschancen und verbessert die Arbeitserfahrung. Ich zeige Strategien, um Skills wirksam in den Mittelpunkt zu rücken.",
        },
      ],
    },
    about: {
      title: "Über mich",
      copy: "Seit über dreissig Jahren bin ich im Personalbereich tätig – als Fachspezialist, Head HR und Unternehmer. Die gewonnenen Erfahrungen möchte ich weitergeben, damit Organisationen ihre Herausforderungen erfolgreich meistern.",
      accordion: [
        {
          title: "Kurzlebenslauf",
          content:
            "Seit 2022 Director of Skills bei Learning Pool. Gründer und Geschäftsführer der peopleWORKS GmbH. Mitgründer und CEO der People-Analytix AG (2022 von Learning Pool übernommen).",
        },
        {
          title: "BetterBoss Buchreihe",
          content:
            "Zwei Bücher mit je 66 Rezepten für wertschätzende Führung und inspirierte Arbeit – praxisnah, übersichtlich und kreativ gestaltet.",
        },
        {
          title: "Wofür ich einstehe",
          content:
            "Ich begleite Organisationen in der Professionalisierung der Personalführung – wertschätzend und wirksam für Management, Mitarbeitende, Kunden, Gesellschaft und Aktionäre.",
        },
      ],
    },
    contact: {
      title: "Kontakt",
      intro:
        "Schreib mir direkt – die Nachricht öffnet dein E-Mail Programm mit allen Angaben.",
      labels: {
        name: "Name",
        email: "E-Mail",
        subject: "Betreff",
        message: "Nachricht",
      },
      button: "E-Mail öffnen",
      addressTitle: "Adresse",
      address: "Rotackerstrasse 43\n8645 Jona, Schweiz",
      contactTitle: "Kontakt",
      email: "info@peopleworks.ch",
      phone: "+41 79 786 40 79",
    },
  },
  en: {
    nav: { services: "Services", about: "About", contact: "Contact" },
    hero: {
      title: "HR Sparring Partner",
      name: "Christoph Küffer",
      tagline: "Experienced. Pragmatic. Effective.",
    },
    services: {
      title: "My Consulting Focus Areas",
      items: [
        {
          title: "HR Transformation",
          content:
            "Automation, AI, data-driven HR and People Analytics reshape collaboration and redefine HR’s role. I help you gain clarity and align HR for the future.",
        },
        {
          title: "HR Reinforcement",
          content:
            "During phases of change, capacity or neutral leadership may be missing. I ensure operational continuity and relieve your team with an external, unbiased view.",
        },
        {
          title: "Put Skills at the Center",
          content:
            "A skills-based approach increases success and improves the employee experience. I show strategies to place skills effectively at the center.",
        },
      ],
    },
    about: {
      title: "About",
      copy: "I have worked in HR for over thirty years—as a specialist, Head of HR and entrepreneur. I share my experience so organizations can master their challenges effectively.",
      accordion: [
        {
          title: "Short CV",
          content:
            "Since 2022 Director of Skills at Learning Pool. Founder and Managing Director of peopleWORKS GmbH. Co‑founder and CEO of People‑Analytix AG (acquired by Learning Pool in 2022).",
        },
        {
          title: "BetterBoss Book Series",
          content:
            "Two books with 66 ‘recipes’ each for appreciative leadership and inspired work—practical, clear and creatively designed.",
        },
        {
          title: "What I Stand For",
          content:
            "I support organizations in professionalizing people leadership—respectfully and effectively for management, employees, customers, society and shareholders.",
        },
      ],
    },
    contact: {
      title: "Contact",
      intro:
        "Write to me directly—the message opens your email app with all details.",
      labels: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
      },
      button: "Open Email",
      addressTitle: "Address",
      address: "Rotackerstrasse 43\n8645 Jona, Switzerland",
      contactTitle: "Contact",
      email: "info@peopleworks.ch",
      phone: "+41 79 786 40 79",
    },
  },
} as const;

export function getInitialLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = window.localStorage.getItem("locale") as Locale | null;
  if (stored === "de" || stored === "en") return stored;
  const nav = navigator.language.toLowerCase();
  if (nav.startsWith("de")) return "de";
  return "de";
}

export function saveLocale(locale: Locale) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("locale", locale);
  }
}
