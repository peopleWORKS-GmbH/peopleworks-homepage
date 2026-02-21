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
            "Automatisierung, Künstliche Intelligenz, Data-Driven HR, kontinuierliches Upskilling oder People Analytics prägen nicht nur die Arbeit und Zusammenarbeit, sondern definieren die Rolle Personalabteilung neu. Das Zusammenspiel von Mensch und Technologie wird zu einer immer wichtigeren Aufgabe und fordert die HR-Abteilung heraus, ihr Geschäftsmodell zukunftssicher und effizient aufzustellen.\n\n Die Notwendigkeit, diesen Wandel im HR aktiv zu gestalten, ist in den meisten Unternehmen erkannt. Die Herausforderung besteht jedoch im Erarbeiten eines gemeinsamen Zielbildes und der anschliessenden Umsetzung.\n\n Ich unterstütze dich dabei, Klarheit zu gewinnen, die richtigen Prioritäten zu setzen und deine HR-Organisation für die Zukunft auszurichten.",
        },
        {
          title: "HR Verstärkung",
          content:
            "Schnelles Wachstum, Firmenintegrationen oder der Launch grosser strategischer Initiativen: In Phasen des Umbruchs steht die HR-Organisation unter maximalem Druck. Oft fehlt es an Kapazität, an spezifischer Erfahrung für Sondersituationen oder schlicht an einer neutralen Führungshand, die den Kurs hält. Ich biete dir die Verstärkung, die deine Personalabteilung genau dann braucht.\n\n Dadurch sichere ich die operative Kontinuität in kritischen Phasen und bringe eine sofortige Entlastung im Team mit einem unvoreingenommener Blick von aussen.",
        },
        {
          title: "Skills ins Zentrum stellen",
          content:
            "Laut [Deloitte](https://www2.deloitte.com/us/en/insights/topics/talent/organizational-skill-based-hiring.html) haben Unternehmen mit einem skill-basierten Ansatz 63% mehr Chancen erfolgreich zu sein und bieten ihren Mitarbeitenden eine um 79 % positivere Arbeitserfahrung.\n\n Projektbasiertes Arbeiten, verkürzte Technologiezyklen, geforderte Agilität, oder die Schwierigkeit Talente zu behalten, erfordern neuartige Konzepte. Ein skill-basierter Ansatz adressiert diese Herausforderungen effektiv und effizient.\n\n Aber was bedeutet ein solcher Ansatz für Unternehmen? Wie gewinne ich die Unterstützung des Managements und wo beginne ich mit der Umsetzung? Ich habe Unternehmen auf diesem Weg eng und über Monate begleitet und kenne die Strategien und Ansätze, dass dies gelingt.",
        },
      ],
    },
    about: {
      title: "Über mich",
      copy: "Seit über dreissig Jahren bin ich im Personalbereich tätig, als Fachspezialist, als Head Human Resources sowie die letzten 15 Jahre als Unternehmer. Diese Funktionen habe ich in verschiedenen Organisationen und Branchen ausgeübt: in einem globalen Unternehmen in der Finanzindustrie, in einem paneuropäischen Familienunternehmen, dass von einem Private Equity House übernommen wurde oder in einem schnell wachsenden Start-up, welches nach 5 Jahren den erfolgreichen IPO durchführte. Die zahlreichen Erfahrungen (up's wie down's) und gewonnenen Erkenntnisse möchte ich anderen Firmen weitergeben, damit diese die anstehenden Herausforderungen erfolgreich meistern können.",
      accordion: {
        cv: {
          title: "Kurzlebenslauf",
          subtitle: "Mein Kurzlebenslauf",
          careerTitle: "Beruflicher Werdegang",
          career: [
            {
              period: "Seit 2022",
              role: "Director of Skills bei [Learning Pool](https://www.learningpool.com/)",
            },
            {
              period: "Seit 2008",
              role: "Gründer und Geschäftsführer der Firma [peopleWORKS GmbH](https://www.peopleworks.ch/), welche Firmen in Future HR, Skills und People Engagement berät und begleitet",
            },
            {
              period: "2018-2022",
              role: "Mitgründer und CEO der [People-Analytix AG](http://www.people-analytix.com/), eine KI-basierte Skill-Management Plattform zur Entwicklung der Belegschaft (People-Analytix wurde im 2022 durch Learning Pool übernommen)",
            },
            {
              period: "2014-2020",
              role: "Gründungspartner der [Spot Coaching AG](http://www.spotcoaching.ch/), der virtuelle Sparringspartner für Führungskräfte in beruflichen Fragen",
            },
            {
              period: "2006",
              role: "Bank Julius Baer: Leiter der Abteilung HR International und zuständig für alle Personal-abteilungen ausserhalb der Schweiz mit einem starken Fokus auf Asien, Middle East und Osteuropa",
            },
            {
              period: "2002",
              role: "EurotaxGlass's: Leiter Head Human Resources und verantwortlich für alle Personal-Belange in 18 europäischen Ländern",
            },
            {
              period: "2000",
              role: "Jobscout 24: Leiter Business Development beim europäischen Online-Rekrutierungsportal JobScout24 und verantwortlich für den Aufbau und Inhalt des Portals www.hrgate.ch",
            },
            {
              period: "1995",
              role: "UBS: Einstieg bei UBS (ehemals Schweizerischer Bankverein) im strategischen HR am Hauptsitz. Danach Auslandaufenthalt in New York und zuständig für Expatriates in der Investmentbank. Nach der Fusion mit UBS verantwortlich für die Hochschulrekrutierung im Bereiche Privat- und Firmenkunden",
            },
          ],
          skillsTitle: "Wichtigste Skills",
          skills:
            "Digital HR | Digitale Transformation | HR-Tech | KI im HR | Neue Arbeitswelten | Moderation | Vertrauen schaffen | Coaching | Empathie | Rudern | problemlösend | ausdauernd | Projektmanagement",
          otherTitle: "Sonstiges",
          other: [
            {
              text: 'Co-Autor der Bücher "BetterBoss" und "Inspired at Work"',
            },
            {
              text: "Dozent an der FHNW und HTW Chur",
            },
            {
              text: "Master in Business Administration an der Universität Zürich",
            },
            {
              text: "1992 Teilnahme an den Olympischen Sommerspielen in Barcelona, Sportart Rudern",
            },
          ],
        },
        books: {
          title: "BetterBoss Buchreihe",
          paragraphs: [
            'Wie wirst du ein "BetterBoss"? Wie schaffst du ein Umfeld "Inspired at Work"?',
            "Dies sind Kernfragen, die uns immer wieder im Arbeitsalltag beschäftigen. Ich habe mit Gleichgesinnten zwei Bücher geschrieben, die genau diesen Fragen nachgehen.",
            "Mit jeweils 66 originellen, übersichtlich gestalteten und kreativen «Rezepten», findest du Anregung und Wegleitung zugleich; für ein Arbeitsumfeld, in dem sowohl wertschätzend geführt als auch engagiert und innovativ gearbeitet wird.",
            'Jedes "Rezept" wird begleitet von einer liebevoll gestalteten Grafik. Das Buch ist eine Sammlung praktischer Ideen, die sich dank der übersichtlichen Rubriken wie Zutaten und Zubereitung rasch und einfach umsetzen lassen und klar, übersichtlich, praxisnah, «schmackhaft» und liebevoll präsentiert sind.',
            "Ergänzt werden die Rezepte durch Praxisberichte von Firmen, welche erzählen, wie ihr Rezept im eigenen Unternehmen erfolgreich umgesetzt wurde: Axa Winterthur, Bank Julius Bär, Création Baumann, Leonteq, Genossenschaft Migros Zürich, Hiltl, HUG, SWISS, Vitra, Post, SBB, SwissRe, Jung von Matt/Limmat, Evernote, Zappos, DeinDeal und viele mehr.",
          ],
          orderText: "Jetzt bestellen",
          orderUrl:
            "https://docs.google.com/forms/d/e/1FAIpQLSfcEwplQFwqRpniIOQAIyxvpDGVSUCgBxkJRm5aRyMaUSXIPg/viewform?pli=1",
        },
        mission: {
          title: "Wofür ich einstehe",
          paragraphs: [
            "Ich berate und begleite Organisationen in der Professionalisierung der Personalführung, damit diese ihre Ziele schneller und besser erreichen.",
            "Und dies auf eine wertschätzende Art und Weise, bei der alle gleichermassen profitieren: das Management, die Mitarbeitenden, die Kunden, die Gesellschaft sowie die Aktionäre.",
          ],
        },
      },
    },
    books: {
      title1: 'Wie wirst du ein "BetterBoss"?',
      title2: "Wie schaffst du ein Umfeld “Inspired at Work”?",
      intro: [
        "Dies sind Kernfragen, die uns immer wieder im Arbeitsalltag beschäftigen. Ich habe mit Gleichgesinnten zwei Bücher geschrieben, die genau diesen Fragen nachgehen.",
        "Mit jeweils 66 originellen, übersichtlich gestalteten und kreativen «Rezepten», findest du Anregung und Wegleitung zugleich; für ein Arbeitsumfeld, in dem sowohl wertschätzend geführt als auch engagiert und innovativ gearbeitet wird.",
        'Jedes "Rezept" wird begleitet von einer liebevoll gestalteten Grafik. Das Buch ist eine Sammlung praktischer Ideen, die sich dank der übersichtlichen Rubriken wie Zutaten und Zubereitung rasch und einfach umsetzen lassen und klar, übersichtlich, praxisnah, «schmackhaft» und liebevoll präsentiert sind.',
        "Ergänzt werden die Rezepte durch Praxisberichte von Firmen, welche erzählen, wie ihr Rezept im eigenen Unternehmen erfolgreich umgesetzt wurde: Axa Winterthur, Bank Julius Bär, Création Baumann, Leonteq, Genossenschaft Migros Zürich, Hiltl, HUG, SWISS, Vitra, Post, SBB, SwissRe, Jung von Matt/Limmat, Evernote, Zappos, DeinDeal und viele mehr.",
      ],
      band1: {
        title: "BetterBoss Band 1",
        subtitle: "BetterBoss – Einfach nach Rezept",
        description:
          "66 Ideen für mehr Wertschätzung und Freude am Arbeitsplatz.",
        published: "Erschienen im Oktober 2012 im Versus Verlag",
        authors: "Katinka Gyomlay, Christoph Küffer, Regina Regenass",
        isbn: "ISBN 978-3-03909-129-4",
        details: "176 Seiten, Versus Verlag, Richtpreis: CHF 34.00",
        orderText: "Jetzt Bestellen",
        orderUrl:
          "https://docs.google.com/forms/d/e/1FAIpQLSfcEwplQFwqRpniIOQAIyxvpDGVSUCgBxkJRm5aRyMaUSXIPg/viewform",
        imageUrl: "/betterboss_cover.tiff",
      },
      band2: {
        title: "BetterBoss Band 2",
        subtitle: "Inspired at Work",
        description:
          "66 Ideen für mehr Engagement und Innovation im Unternehmen.",
        published: "Erschienen im November 2014 im Versus Verlag",
        authors: "Sunnie Groeneveld, Christoph Küffer",
        isbn: "ISBN 978-3-03909-161-4",
        details: "176 Seiten, Versus Verlag, Richtpreis: CHF 34.00",
        orderText: "Jetzt Bestellen",
        orderUrl:
          "https://docs.google.com/forms/d/e/1FAIpQLSfcEwplQFwqRpniIOQAIyxvpDGVSUCgBxkJRm5aRyMaUSXIPg/viewform",
        imageUrl: "/inspired_at_work_cover.png",
      },
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
            "Automation, artificial intelligence, data-driven HR, continuous upskilling, and people analytics are not only shaping work and collaboration, but also redefining the role of the HR department. The interaction between people and technology is becoming an increasingly important task and challenges the HR department to make its business model future-proof and efficient.\n\n Most companies recognize the need to actively shape this change in HR. However, the challenge lies in developing a common vision and then implementing it.\n\n I support you in gaining clarity, setting the right priorities, and aligning your HR organization for the future.",
        },
        {
          title: "HR Reinforcement",
          content:
            "Rapid growth, company integrations, or the launch of major strategic initiatives: in times of change, the HR organization is under maximum pressure. Often, there is a lack of capacity, specific experience for special situations, or simply a neutral guiding hand to keep the course. I offer you the reinforcement your HR department needs at precisely this moment.\n\n In this way, I ensure operational continuity in critical phases and provide immediate relief for the team with an unbiased outside perspective.",
        },
        {
          title: "Put Skills at the Center",
          content:
            "According to [Deloitte](https://www2.deloitte.com/us/en/insights/topics/talent/organizational-skill-based-hiring.html), companies with a skill-based approach have a 63% greater chance of success and offer their employees a 79% more positive work experience. \n\n Project-based work, shortened technology cycles, the demand for agility, and the difficulty of retaining talent require innovative concepts. A skill-based approach addresses these challenges effectively and efficiently.\n\n But what does such an approach mean for companies? How do I gain management support and where do I start with implementation? I have closely accompanied companies on this path for months and know the strategies and approaches that make it successful.",
        },
      ],
    },
    about: {
      title: "About",
      copy: "I have worked in HR for over thirty years—as a specialist, Head of HR and entrepreneur. I share my experience so organizations can master their challenges effectively.",
      accordion: {
        cv: {
          title: "Short CV",
          subtitle: "My Short CV",
          careerTitle: "Professional Experience",
          career: [
            {
              period: "Since 2022",
              role: "Director of Skills at Learning Pool",
              link: "https://www.learningpool.com/",
              linkText: "Learning Pool",
            },
            {
              period: "Since 2008",
              role: "Founder and Managing Director of peopleWORKS GmbH, which advises and supports companies in Future HR, Skills and People Engagement",
              link: "https://www.peopleworks.ch/",
              linkText: "peopleWORKS GmbH",
            },
            {
              period: "2018-2022",
              role: "Co-founder and CEO of People-Analytix AG, www.people-analytix.com, an AI-based skill management platform for workforce development (People-Analytix was acquired by Learning Pool in 2022)",
              link: "http://www.people-analytix.com/",
              linkText: "www.people-analytix.com",
            },
            {
              period: "2014-2020",
              role: "Founding partner of Spot Coaching AG, www.spotcoaching.ch; the virtual sparring partner for executives in professional matters",
              link: "http://www.spotcoaching.ch/",
              linkText: "www.spotcoaching.ch",
            },
            {
              period: "2006",
              role: "Bank Julius Baer: Head of HR International department, responsible for all HR departments outside Switzerland with a strong focus on Asia, Middle East and Eastern Europe",
            },
            {
              period: "2002",
              role: "EurotaxGlass's: Head of Human Resources, responsible for all HR matters in 18 European countries",
            },
            {
              period: "2000",
              role: "Jobscout 24: Head of Business Development at the European online recruitment portal JobScout24 and responsible for building and content of the portal www.hrgate.ch",
            },
            {
              period: "1995",
              role: "UBS: Started at UBS (formerly Swiss Bank Corporation) in strategic HR at headquarters. Then overseas assignment in New York responsible for expatriates in investment banking. After the merger with UBS responsible for university recruitment in private and corporate clients",
            },
          ],
          skillsTitle: "Key Skills",
          skills:
            "Digital HR | Digital Transformation | HR-Tech | AI in HR | New Work | Moderation | Building Trust | Coaching | Empathy | Rowing | Problem-solving | Persistent | Project Management",
          otherTitle: "Other",
          other: [
            {
              text: 'Co-author of the books "BetterBoss" and "Inspired at Work"',
              link: "http://www.betterboss.ch/",
              linkText: "www.betterboss.ch",
            },
            {
              text: "Lecturer at FHNW and HTW Chur",
            },
            {
              text: "Master in Business Administration at University of Zurich",
            },
            {
              text: "1992 Participation in the Olympic Summer Games in Barcelona, sport rowing",
            },
          ],
        },
        books: {
          title: "BetterBoss Book Series",
          paragraphs: [
            'How do you become a "BetterBoss"? How do you create an environment "Inspired at Work"?',
            "These are core questions that repeatedly occupy us in everyday work. I have written two books with like-minded people that address exactly these questions.",
            'With 66 original, clearly designed and creative "recipes" each, you find inspiration and guidance at the same time; for a work environment in which both appreciative leadership and engaged and innovative work takes place.',
            'Each "recipe" is accompanied by a lovingly designed graphic. The book is a collection of practical ideas that can be implemented quickly and easily thanks to the clear categories such as ingredients and preparation and are presented clearly, concisely, practically, "tasty" and lovingly.',
            "The recipes are supplemented by practical reports from companies that tell how their recipe was successfully implemented in their own company: Axa Winterthur, Bank Julius Bär, Création Baumann, Leonteq, Cooperative Migros Zurich, Hiltl, HUG, SWISS, Vitra, Post, SBB, SwissRe, Jung von Matt/Limmat, Evernote, Zappos, DeinDeal and many more.",
          ],
          orderText: "Order now",
          orderUrl:
            "https://docs.google.com/forms/d/e/1FAIpQLSfcEwplQFwqRpniIOQAIyxvpDGVSUCgBxkJRm5aRyMaUSXIPg/viewform?pli=1",
        },
        mission: {
          title: "What I Stand For",
          paragraphs: [
            "I advise and support organizations in professionalizing people leadership so they can achieve their goals faster and better.",
            "And this in an appreciative way where everyone benefits equally: management, employees, customers, society and shareholders.",
          ],
        },
      },
    },
    books: {
      title1: 'How do you become a "BetterBoss"?',
      title2: 'How do you create an environment "Inspired at Work"?',
      intro: [
        "These are core questions that repeatedly occupy us in everyday work. I have written two books with like-minded people that address exactly these questions.",
        'With 66 original, clearly designed and creative "recipes" each, you find inspiration and guidance at the same time; for a work environment in which both appreciative leadership and engaged and innovative work takes place.',
        'Each "recipe" is accompanied by a lovingly designed graphic. The book is a collection of practical ideas that can be implemented quickly and easily thanks to the clear categories such as ingredients and preparation and are presented clearly, concisely, practically, "tasty" and lovingly.',
        "The recipes are supplemented by practical reports from companies that tell how their recipe was successfully implemented in their own company: Axa Winterthur, Bank Julius Bär, Création Baumann, Leonteq, Cooperative Migros Zurich, Hiltl, HUG, SWISS, Vitra, Post, SBB, SwissRe, Jung von Matt/Limmat, Evernote, Zappos, DeinDeal and many more.",
      ],
      band1: {
        title: "BetterBoss Volume 1",
        subtitle: "BetterBoss – Simply Follow the Recipe",
        description: "66 ideas for more appreciation and joy in the workplace.",
        published: "Published in October 2012 by Versus Verlag",
        authors: "Katinka Gyomlay, Christoph Küffer, Regina Regenass",
        isbn: "ISBN 978-3-03909-129-4",
        details: "176 pages, Versus Verlag, Recommended price: CHF 34.00",
        orderText: "Order Now",
        orderUrl:
          "https://docs.google.com/forms/d/e/1FAIpQLSfcEwplQFwqRpniIOQAIyxvpDGVSUCgBxkJRm5aRyMaUSXIPg/viewform",
        imageUrl: "/betterboss_cover.tiff",
      },
      band2: {
        title: "BetterBoss Volume 2",
        subtitle: "Inspired at Work",
        description:
          "66 ideas for more engagement and innovation in the company.",
        published: "Published in November 2014 by Versus Verlag",
        authors: "Sunnie Groeneveld, Christoph Küffer",
        isbn: "ISBN 978-3-03909-161-4",
        details: "176 pages, Versus Verlag, Recommended price: CHF 34.00",
        orderText: "Order Now",
        orderUrl:
          "https://docs.google.com/forms/d/e/1FAIpQLSfcEwplQFwqRpniIOQAIyxvpDGVSUCgBxkJRm5aRyMaUSXIPg/viewform",
        imageUrl: "/inspired_at_work_cover.png",
      },
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
