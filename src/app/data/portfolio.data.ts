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
    dates: 'févr. – juil. 2026',
    company: 'Atos',
    place: 'Strasbourg',
    role: 'Stage Full Stack et Business Intelligence · projet ASOT',
    points: [
      'Besoins métier recueillis et KPI définis (montant à facturer, tickets en erreur)',
      'Flux ETL et tableaux de bord de facturation ; page Suivi KPI développée avec Angular',
      'Services back-end et API REST en Java / Spring Boot, données PostgreSQL et Oracle',
      "Données de facturation fiabilisées par filtrage SQL des tickets de l'équipe TMA",
      "Tests unitaires et d'intégration, recette, déploiements Jenkins (CI/CD), suivi des demandes par ticketing",
    ],
    result:
      'Tableaux de bord en production, utilisés quotidiennement · 90 % des données fiabilisées',
    stack: [
      'Angular',
      'Spring Boot',
      'Informatica',
      'Tableau',
      'SAP BO',
      'Oracle',
      'PostgreSQL',
      'Jenkins',
    ],
  },
  {
    dates: 'févr. – juil. 2025',
    company: 'Liebherr Mining Equipment',
    place: 'Colmar',
    role: 'Stage Business Analyst et Business Intelligence',
    points: [
      "Processus ETL automatisant l'intégration et le nettoyage des données",
      'Packages SSIS planifiés pour orchestrer des flux multi-sources',
      'Rapports SSRS avec abonnements automatiques pour les managers',
    ],
    result:
      'Indicateurs hebdomadaires diffusés automatiquement aux managers, sans traitement manuel',
    stack: ['SSIS', 'SSRS', 'C#', 'Jira', 'Confluence'],
  },
  {
    dates: 'oct. 2022 – mars 2023',
    company: 'Integrated Digital Systems',
    place: 'Liban',
    role: 'Stage Développement Web .NET / C#',
    points: [
      'Outil de construction de formulaires web paramétrables en C# / .NET et SQL Server',
      'Déploiement en environnements Dev, Recette et Production',
      'Architecture modélisée en UML, cohérente avec les besoins fonctionnels',
    ],
    result: 'Outil livré, paramétrable sans modifier le code',
    stack: ['C#', '.NET', 'SQL Server', 'UML'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'facturation-atos',
    category: 'both',
    context: 'Atos · stage 2026',
    title: 'Facturation TMA et suivi KPI',
    description:
      'Tableau de bord de facturation (ASOT) : KPI définis avec le métier, flux ETL, API Spring Boot et interface Angular. Code client confidentiel : visuels anonymisés.',
    stack: ['Angular', 'Spring Boot', 'Informatica', 'Tableau'],
    imagePlaceholder: 'Maquette anonymisée',
    links: [],
  },
  {
    id: 'reporting-liebherr',
    category: 'bi',
    context: 'Liebherr · stage 2025',
    title: 'Automatisation du reporting',
    description:
      'Flux ETL et packages SSIS planifiés, rapports SSRS envoyés automatiquement chaque semaine aux managers.',
    stack: ['SSIS', 'SSRS', 'C#'],
    imagePlaceholder: 'Schéma du flux ETL',
    links: [],
  },
  {
    id: 'boutique-bdd',
    category: 'bi',
    context: 'UTBM · 2023 – 2024',
    title: 'Base de données Gestion de Boutique',
    description: 'Modèle conceptuel (MCD → MLD), requêtes SQL et rapport Power BI sur les ventes.',
    stack: ['SQL', 'Power BI'],
    imagePlaceholder: 'Capture du rapport Power BI',
    links: [{ label: 'GitHub', url: '#' }],
  },
  {
    id: 'ecommerce-angular',
    category: 'dev',
    context: 'UTBM · 2023 – 2024',
    title: 'Site e-commerce',
    description:
      "Site de commerce électronique en Angular, de la rédaction du cahier des charges jusqu'à l'interface.",
    stack: ['Angular'],
    imagePlaceholder: "Capture d'écran",
    links: [
      { label: 'GitHub', url: '#' },
      { label: 'Démo', url: '#' },
    ],
  },
  {
    id: 'form-builder',
    category: 'dev',
    context: 'UTBM · 2024 – 2025',
    title: 'Constructeur de formulaires web',
    description:
      'Formulaires paramétrables (validation, filtres, base de données) avec une API Spring Boot.',
    stack: ['Spring Boot', 'Next.js', 'MongoDB'],
    imagePlaceholder: "Capture d'écran",
    links: [{ label: 'GitHub', url: '#' }],
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
