const translations = {
  pl: {
    "nav.about": "O mnie",
    "nav.projects": "Projekty",
    "nav.labs": "Praktyka",
    "nav.achievements": "Osiągnięcia",
    "hero.eyebrow": "Portfolio studenta cyberbezpieczeństwa",
    "hero.name": "Szymon Stolarski",
    "hero.lead":
      "Student cyberbezpieczeństwa rozwijający kompetencje w obszarze bezpieczeństwa aplikacji, chmury, analizy danych oraz administracji systemami.",
    "hero.roleLabel": "Rola",
    "hero.roleValue": "Student cyberbezpieczeństwa",
    "hero.uniLabel": "Uczelnia",
    "hero.uniValue": "Politechnika Wrocławska",
    "hero.cardLabel": "Główne obszary",
    "about.eyebrow": "Profil",
    "about.title": "O mnie",
    "about.body":
      "Buduję portfolio wokół praktycznego cyberbezpieczeństwa: od zabezpieczania aplikacji webowych i pipeline'ów CI/CD, przez izolację nośników USB, po projektowanie baz danych i analizę dużych zbiorów danych. Łączę podejście inżynierskie z analizą ryzyka i dbałością o bezpieczeństwo na każdym etapie projektu.",
    "about.educationTitle": "Edukacja",
    "about.educationBody":
      "Student trzeciego roku na Wydziale Informatyki i Telekomunikacji, na kierunku cyberbezpieczeństwo ze specjalizacją bezpieczeństwo systemów informatycznych.",
    "about.languagesTitle": "Języki",
    "about.languagesBody":
      "Język polski: ojczysty. Język angielski: poziom B2 w komunikacji pisemnej i ustnej.",
    "about.focusTitle": "Obszary zainteresowań",
    "about.focusBody":
      "Bezpieczeństwo sieci i systemów, analiza incydentów, automatyzacja wdrożeń, testy bezpieczeństwa oraz praktyczne wykorzystanie narzędzi w środowiskach Linux i cloud.",
    "about.toolsLabel": "Narzędzia i technologie",
    "projects.eyebrow": "Część projektowa",
    "projects.title": "Wybrane projekty",
    "project.common.scope": "Zakres",
    "project.common.impact": "Rezultat",
    "project1.title": "CI/CD i bezpieczne wdrożenie aplikacji webowej do AWS",
    "project1.pill": "DevSecOps",
    "project1.body":
      "Projekt stanowił część większej inicjatywy związanej z zabezpieczeniem aplikacji webowej. Przygotowałem pipeline GitHub Actions, który automatyzuje testy, analizę bezpieczeństwa, budowanie obrazu kontenera, publikację do Amazon ECR, wdrożenie do klastra Amazon EKS oraz końcową kontrolę DAST z użyciem OWASP ZAP.",
    "project1.scope":
      "Testy aplikacji, skan SAST Bandit, skan obrazu Trivy, uwierzytelnianie OIDC do AWS, rollout na Kubernetes oraz walidacja wdrożenia i dostępności aplikacji.",
    "project1.impact":
      "Powstał spójny proces dostarczania, który łączy automatyzację z kontrolami bezpieczeństwa i umożliwia regularne, powtarzalne wdrożenia w środowisku chmurowym.",
    "project2.title": "SafeGate USB: izolowana stacja sanityzacji nośników danych",
    "project2.pill": "Endpoint Security",
    "project2.body":
      "SafeGate USB to koncepcja bezpiecznej „śluzy” dla nieznanych nośników USB. System wykrywa nowe urządzenia, blokuje automatyczne montowanie na hoście, przekazuje nośnik do odizolowanej maszyny wirtualnej i uruchamia proces analizy przed dopuszczeniem urządzenia do użycia w środowisku wewnętrznym.",
    "project2.scope":
      "Automatyczna detekcja zdarzeń udev, kontrola przepływu USB do maszyny gościnnej, obliczanie sum SHA-256, weryfikacja w VirusTotal API i generowanie czytelnego werdyktu bezpieczeństwa.",
    "project2.impact":
      "Projekt pokazuje praktyczne podejście do ograniczania ryzyka związanego z autorun, BadUSB i niezweryfikowanymi nośnikami poprzez izolację, automatyzację i analizę reputacyjną plików.",
    "project3.title": "Relacyjna baza danych SQL dla stołówki",
    "project3.pill": "Database Design",
    "project3.body":
      "Projekt obejmował zaprojektowanie systemu wspierającego codzienną pracę stołówki: obsługę zamówień, zarządzanie menu, kontrolę stanów magazynowych, historię sprzedaży oraz raportowanie. Kluczowym elementem było zbudowanie logicznego modelu danych i odwzorowanie ról pracowników w systemie.",
    "project3.scope":
      "Analiza biznesowa, wymagania funkcjonalne i niefunkcjonalne, RBAC dla pracowników, scenariusze użycia, ERD oraz implementacja tabel dla obszarów takich jak zamówienia, magazyn, menu dnia, przepisy, pozycje zamówień i faktury.",
    "project3.impact":
      "Powstał projekt bazy, który porządkuje proces operacyjny, wspiera raportowanie przychodów i zużycia składników oraz uwzględnia bezpieczeństwo danych logowania i podział uprawnień.",
    "project4.title": "Przetwarzanie dużego zbioru danych i analiza kolizji drogowych",
    "project4.pill": "Data Analysis",
    "project4.body":
      "W projekcie analizowałem masowy zbiór danych NYC Open Data dotyczący kolizji drogowych. Zakres prac obejmował pobranie danych z API Socrata, przygotowanie procesu ETL, oczyszczenie ponad 2,2 mln rekordów oraz wykonanie analiz statystycznych i przestrzennych.",
    "project4.scope":
      "Czyszczenie danych w Pythonie, walidacja atrybutów geograficznych, inżynieria cech czasowych, agregacje statystyczne, wykresy w Matplotlib oraz mapy punktowe i heatmapy w Folium.",
    "project4.impact":
      "Analiza pozwoliła wskazać dominujące przyczyny kolizji, wzorce czasowe, najbardziej obciążone dzielnice oraz przestrzenne punkty krytyczne, a przy tym pokazała umiejętność pracy z danymi w skali big data.",
    "labs.eyebrow": "Kompetencje praktyczne",
    "labs.title": "Praktyka laboratoryjna i operacyjna",
    "lab1.title": "Testy penetracyjne aplikacji webowych",
    "lab1.body":
      "Realizowałem zadania związane z wykrywaniem i analizą podatności takich jak XSS, clickjacking, brute-force oraz SQL injection. Ćwiczenia obejmowały identyfikację wektorów ataku, ocenę ryzyka oraz wskazywanie działań naprawczych zwiększających odporność aplikacji.",
    "lab2.title": "Zarządzanie projektem IT",
    "lab2.body":
      "Pracowałem z backlogiem w JIRA oraz dokumentacją projektową, w tym kartą projektu. Dzięki temu rozwijałem umiejętność planowania zadań, priorytetyzacji wymagań, opisu zakresu, ryzyk, interesariuszy i etapów realizacji inicjatyw IT.",
    "lab3.title": "Ćwiczenia chmurowe w AWS",
    "lab3.body":
      "W ramach laboratoriów budowałem podstawowe środowiska w AWS, konfigurując m.in. sieci VPC, grupy bezpieczeństwa, load balancery, reguły WAF oraz elementy wdrożeniowe wspierające dostępność i ochronę aplikacji działających w chmurze.",
    "lab4.title": "Zarządzanie sieciami komputerowymi",
    "lab4.body":
      "Rozwijałem praktykę z zakresu konfiguracji i zabezpieczania sieci, pracując z tematami związanymi z routingiem, segmentacją, dostępem administracyjnym, bezpieczeństwem warstwy 2 oraz materiałami i standardami kojarzonymi z ekosystemem Cisco.",
    "lab5.title": "Automatyzacja i skrypty administracyjne",
    "lab5.body":
      "Tworzyłem skrypty w Pythonie i Bashu wspierające automatyzację zadań, analizę danych, przetwarzanie plików oraz usprawnienie pracy w środowiskach laboratoryjnych i administracyjnych.",
    "lab6.title": "Praca z systemami Linux",
    "lab6.body":
      "Korzystałem z systemów Linux, w tym Kali Linux, podczas laboratoriów związanych z bezpieczeństwem, administracją, testami narzędzi oraz pracą w środowisku terminalowym.",
    "achievements.eyebrow": "Osiągnięcia",
    "achievements.title": "Wyniki i wyróżnienia",
    "achievements.itemTitle": "Stypendium Rektora",
    "achievements.itemBody":
      "Trzykrotne uzyskanie stypendium rektora na kierunku cyberbezpieczeństwo za wysokie wyniki w nauce i konsekwentny rozwój kompetencji technicznych.",
    "certs.title": "Certyfikaty i kursy",
    "certs.body":
      "Wybrane szkolenia i certyfikaty potwierdzające rozwój w obszarze bezpieczeństwa chmury, sieci i cyberbezpieczeństwa praktycznego."
  },
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.labs": "Practice",
    "nav.achievements": "Achievements",
    "hero.eyebrow": "Cybersecurity student portfolio",
    "hero.name": "Szymon Stolarski",
    "hero.lead":
      "A cybersecurity student building practical skills in application security, cloud environments, data analysis, and systems administration.",
    "hero.roleLabel": "Role",
    "hero.roleValue": "Cybersecurity student",
    "hero.uniLabel": "University",
    "hero.uniValue": "Wrocław University of Science and Technology",
    "hero.cardLabel": "Core areas",
    "about.eyebrow": "Profile",
    "about.title": "About me",
    "about.body":
      "My portfolio is focused on practical cybersecurity: from securing web applications and CI/CD pipelines, through USB media isolation, to database design and large-scale data analysis. I combine engineering thinking with risk analysis and a security-first mindset throughout the project lifecycle.",
    "about.educationTitle": "Education",
    "about.educationBody":
      "Third-year student at the Faculty of Information and Communication Technology, majoring in cybersecurity with a specialization in information systems security.",
    "about.languagesTitle": "Languages",
    "about.languagesBody":
      "Polish: native. English: B2 level in spoken and written communication.",
    "about.focusTitle": "Areas of interest",
    "about.focusBody":
      "Network and system security, incident analysis, deployment automation, security testing, and practical use of tools in Linux and cloud environments.",
    "about.toolsLabel": "Tools and technologies",
    "projects.eyebrow": "Project section",
    "projects.title": "Selected projects",
    "project.common.scope": "Scope",
    "project.common.impact": "Outcome",
    "project1.title": "CI/CD and secure deployment of a web application to AWS",
    "project1.pill": "DevSecOps",
    "project1.body":
      "This project was part of a broader initiative focused on securing a web application. I prepared a GitHub Actions pipeline that automates tests, security checks, container image building, publication to Amazon ECR, deployment to Amazon EKS, and final DAST validation with OWASP ZAP.",
    "project1.scope":
      "Application testing, Bandit SAST scan, Trivy image scan, AWS OIDC authentication, Kubernetes rollout, and validation of deployment status and application availability.",
    "project1.impact":
      "The result was a coherent delivery process combining automation with security controls and enabling repeatable cloud deployments.",
    "project2.title": "SafeGate USB: isolated data media sanitization station",
    "project2.pill": "Endpoint Security",
    "project2.body":
      "SafeGate USB is a proof-of-concept for a secure gateway handling unknown USB devices. The system detects newly connected media, blocks automount on the host, forwards the device to an isolated virtual machine, and runs analysis before the device can be allowed into the internal environment.",
    "project2.scope":
      "Automatic udev event detection, USB passthrough control to a guest VM, SHA-256 hash generation, VirusTotal API verification, and a clear security verdict workflow.",
    "project2.impact":
      "The project demonstrates a practical approach to reducing autorun, BadUSB, and untrusted media risks through isolation, automation, and reputation-based file analysis.",
    "project3.title": "Relational SQL database for a cafeteria system",
    "project3.pill": "Database Design",
    "project3.body":
      "This project focused on designing a system supporting daily cafeteria operations: order handling, menu management, stock control, sales history, and reporting. A key part of the work was building a logical data model and mapping employee roles in the system.",
    "project3.scope":
      "Business analysis, functional and non-functional requirements, RBAC for employees, usage scenarios, ERD, and table design for orders, inventory, daily menu, recipes, order items, and invoices.",
    "project3.impact":
      "The resulting schema organizes the operational workflow, supports revenue and ingredient usage reporting, and includes secure credential handling and permission separation.",
    "project4.title": "Large-scale data processing and road collision analysis",
    "project4.pill": "Data Analysis",
    "project4.body":
      "In this project I analyzed a large NYC Open Data dataset related to road collisions. The work covered data acquisition through the Socrata API, ETL preparation, cleaning more than 2.2 million records, and performing statistical and spatial analysis.",
    "project4.scope":
      "Data cleaning in Python, geographic attribute validation, time-based feature engineering, statistical aggregation, Matplotlib charts, and point maps and heatmaps in Folium.",
    "project4.impact":
      "The analysis identified dominant collision causes, temporal patterns, the most impacted boroughs, and spatial hotspots, while also demonstrating the ability to work with big-data-scale datasets.",
    "labs.eyebrow": "Practical skills",
    "labs.title": "Laboratory practice and operational skills",
    "lab1.title": "Web application penetration testing",
    "lab1.body":
      "I completed hands-on tasks related to identifying and analyzing vulnerabilities such as XSS, clickjacking, brute-force, and SQL injection. The exercises focused on attack vectors, risk assessment, and mitigation strategies that improve application resilience.",
    "lab2.title": "IT project management",
    "lab2.body":
      "I worked with JIRA backlogs and project documentation, including a project charter. This helped me develop planning, prioritization, scope definition, risk description, stakeholder mapping, and delivery-structure skills.",
    "lab3.title": "AWS cloud exercises",
    "lab3.body":
      "During lab work I built foundational AWS environments, configuring elements such as VPC networking, security groups, load balancers, WAF rules, and deployment components supporting application availability and protection in the cloud.",
    "lab4.title": "Computer network administration",
    "lab4.body":
      "I developed hands-on networking skills in configuration and security, working with routing, segmentation, secure administrative access, Layer 2 protection, and topics commonly associated with the Cisco ecosystem.",
    "lab5.title": "Automation and administrative scripting",
    "lab5.body":
      "I created Python and Bash scripts supporting task automation, data processing, file handling, and workflow improvements in both laboratory and administrative environments.",
    "lab6.title": "Working with Linux systems",
    "lab6.body":
      "I used Linux systems, including Kali Linux, during labs focused on security, administration, tool usage, and terminal-based work.",
    "achievements.eyebrow": "Achievements",
    "achievements.title": "Results and distinctions",
    "achievements.itemTitle": "Rector's Scholarship",
    "achievements.itemBody":
      "Awarded the rector's scholarship three times in the cybersecurity program for strong academic performance and consistent development of technical skills.",
    "certs.title": "Certificates and courses",
    "certs.body":
      "Selected training paths and certificates confirming ongoing development in cloud security, networking, and practical cybersecurity."
  }
};

const applyLanguage = (lang) => {
  const dict = translations[lang] ?? translations.pl;

  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  window.localStorage.setItem("portfolio-language", lang);
};

const savedLanguage = window.localStorage.getItem("portfolio-language") || "pl";
applyLanguage(savedLanguage);

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});
