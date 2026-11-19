/*les donnees elles-meme*/

import { About, Education, Job, Language, Profile, Project, SkillGroup } from './portfolio.models';


// Tout le contenu du site est ici. Pour modifier un texte, c'est ce fichier qu'on change.

export const PROFILE: Profile = {
  name: 'Mohamad Achour',
  title: 'Ingénieur Full Stack & Business Intelligence',
  location: 'Strasbourg · mobilité France entière',
  email: 'muhamadachour13@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mohamad-achour-771067245',
  github: 'https://github.com/Mohamad-Achour',
  cvFullStack: 'cv/Mohamad_ACHOUR_CV_FullStack.pdf',
  cvBi: 'cv/Mohamad_ACHOUR_CV_BI.pdf',
  photo: 'images/mohamad.webp',
};

export const ABOUT: About = {
  title: 'Du besoin métier à la mise en production.',
  text: "Ingénieur en informatique diplômé de l'UTBM, je travaille à la frontière du développement et de la donnée. D'un côté, des applications web full stack en Java / Angular et C# / .NET ; de l'autre, des flux ETL et des tableaux de bord qui rendent les données métier fiables. Chez Atos, j'ai livré un tableau de bord de facturation utilisé au quotidien, avec 90 % des données fiabilisées ; chez Liebherr, j'ai automatisé tout le reporting hebdomadaire.",
  stats: [
    { value: '3', label: 'stages en entreprise' },
    { value: '2', label: 'profils : Full Stack et Business Intelligence' },
    { value: '4', label: 'langues parlées' },
  ],
};

export const SKILLS: SkillGroup[] = [
  {
    code: '</>',
    title: 'Développement web',
    items: [
      'Angular',
      'Spring Boot',
      '.NET',
      'Java',
      'C#',
      'C++',
      'JavaScript',
      'PHP',
      'HTML / CSS',
    ],
  },
  {
    code: 'bi',
    title: 'ETL et BI',
    items: [
      'Informatica PowerCenter',
      'SSIS',
      'SSRS',
      'Power BI',
      'Tableau',
      'SAP BusinessObjects',
    ],
  },
  {
    code: 'db',
    title: 'Bases de données',
    items: ['PostgreSQL', 'Oracle', 'SQL Server', 'MongoDB', 'SSMS'],
  },
  {
    code: 'ai',
    title: 'Data et IA',
    items: ['Python', 'Machine Learning', 'Deep Learning', 'IA générative'],
  },
  { code: 'ci', title: 'DevOps', items: ['Git', 'GitLab', 'Jenkins', 'CI/CD'] },
  {
    code: 'pm',
    title: 'Gestion de projet',
    items: ['Jira', 'Confluence', 'Agile', 'Kanban', 'ITSM', 'SLA', 'UML'],
  },
];

export const JOBS: Job[] = [
  {
    company: 'Atos',
    url: 'https://atos.net/fr/',
    logo: 'images/logos/atos.png',
    activity: 'Services numériques',
    dates: 'févr. – juil. 2026',
    place: 'Strasbourg',
    role: 'Stage Full Stack & Business Intelligence',
    points: [
      'Développement de la page <strong>Suivi KPI</strong> et des tableaux de bord de facturation en <strong>Angular</strong>.',
      "Création de services back-end et d'<strong>API REST</strong> en <strong>Java / Spring Boot</strong>, connectés à <strong>PostgreSQL</strong>.",
      "Fiabilisation des données de facturation : flux <strong>ETL</strong> et filtrage <strong>SQL</strong> des tickets de l'équipe TMA.",
      'Tests, recette et déploiements automatisés avec <strong>Jenkins</strong>.',
    ],
    result: 'Tableaux de bord en production, utilisés quotidiennement · 90 % des données fiabilisées.',
    stack: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Jenkins'],
  },
  {
    company: 'Liebherr Mining Equipment',
    url: 'https://www.liebherr.com/en-fr/group/location/colmar-mining-products-3752248',
    logo: 'images/logos/liebherr.png',
    activity: "Équipements pour l'industrie minière",
    dates: 'févr. – juil. 2025',
    place: 'Colmar',
    role: 'Stage Business Analyst & Business Intelligence',
    points: [
      "Automatisation de l'intégration et du nettoyage des données avec des packages <strong>SSIS</strong> planifiés.",
      'Création de rapports <strong>SSRS</strong> avec abonnements automatiques pour les managers.',
      'Suivi de projet sur <strong>Jira</strong> et documentation sur <strong>Confluence</strong>.',
    ],
    result: 'Indicateurs hebdomadaires envoyés automatiquement aux managers, sans traitement manuel.',
    stack: ['SSIS', 'SSRS', 'C#', 'Jira'],
  },
  {
    company: 'Integrated Digital Systems',
    url: 'https://www.ids.com.lb',
    logo: 'images/logos/ids.png',
    activity: 'Solutions logicielles',
    dates: 'oct. 2022 – mars 2023',
    place: 'Liban',
    role: 'Stage Développement Web .NET / C#',
    points: [
      "Conception d'un <strong>outil web paramétrable</strong> de création de formulaires en <strong>C# / .NET</strong>.",
      "Modélisation de l'architecture en <strong>UML</strong> et base de données <strong>SQL Server</strong>.",
      'Déploiement en environnements Dev, Recette et Production.',
    ],
    result: 'Outil livré et configurable sans modifier le code.',
    stack: ['C#', '.NET', 'SQL Server'],
  },
];
export const PROJECTS: Project[] = [
  // ---------- En entreprise ----------
  {
    id: 'facturation-atos',
    type: 'stage',
    category: 'both',
    context: 'Atos · stage 2026',
    title: 'Suivi de la facturation',
    description: 'Tableau de bord Angular et API Spring Boot pour suivre les montants à facturer et les tickets en erreur. 90 % des données fiabilisées.',
    stack: ['Angular', 'Spring Boot', 'ETL'],
    image: 'images/projects/facturation.svg',
    link: '#',
  },
  {
    id: 'reporting-liebherr',
    type: 'stage',
    category: 'bi',
    context: 'Liebherr · stage 2025',
    title: 'Automatisation du reporting',
    description: 'Flux ETL SSIS planifiés et rapports SSRS envoyés chaque semaine aux managers, sans traitement manuel.',
    stack: ['SSIS', 'SSRS'],
    image: 'images/projects/reporting.svg',
    link: '#',
  },
  {
    id: 'formulaires-ids',
    type: 'stage',
    category: 'dev',
    context: 'IDS · stage 2022 – 2023',
    title: 'Formulaires web paramétrables',
    description: 'Outil de création de formulaires configurables sans modifier le code, déployé en Dev, Recette et Production.',
    stack: ['C#', '.NET', 'SQL Server'],
    image: 'images/projects/formulaires-net.svg',
    link: '#',
  },
  // ---------- Projets académiques ----------
  {
    id: 'ecommerce-angular',
    type: 'academique',
    category: 'dev',
    context: 'UTBM · 2023 – 2024',
    title: 'Site e-commerce Angular',
    description: "Site de commerce électronique, de la rédaction du cahier des charges jusqu'à l'interface.",
    stack: ['Angular'],
    image: 'images/projects/ecommerce.svg',
    link: '#',
  },
  {
    id: 'form-builder',
    type: 'academique',
    category: 'dev',
    context: 'UTBM · 2024 – 2025',
    title: 'Constructeur de formulaires Spring Boot',
    description: 'Formulaires paramétrables avec validation et filtres, API Spring Boot et base MongoDB.',
    stack: ['Spring Boot', 'Next.js', 'MongoDB'],
    image: 'images/projects/form-builder.svg',
    link: '#',
  },
  {
    id: 'boutique-bdd',
    type: 'academique',
    category: 'bi',
    context: 'UTBM · 2023 – 2024',
    title: 'Base de données Gestion de Boutique',
    description: 'Modèle conceptuel (MCD → MLD), requêtes SQL et rapport Power BI sur les ventes.',
    stack: ['SQL', 'Power BI'],
    image: 'images/projects/boutique-bdd.svg',
    link: '#',
  },
];

export const EDUCATION: Education[] = [
  { degree: 'Ingénieur en Informatique', school: 'UTBM, Belfort', years: '2023 – 2026' },
  {
    degree: 'Génie Réseaux Informatiques et Télécommunications',
    school: 'Université Libanaise',
    years: '2020 – 2023',
  },
];

export const LANGUAGES: Language[] = [
  { name: 'Français', level: 'Professionnel' },
  { name: 'Anglais', level: 'B2 · Linguaskill' },
  { name: 'Arabe', level: 'Langue maternelle' },
  { name: 'Espagnol', level: 'Débutant' },
];
