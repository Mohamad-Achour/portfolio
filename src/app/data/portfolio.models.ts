//definir la forme des donnees//

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  cvFullStack: string;
  cvBi: string;
  photo: string;
}

export interface SkillGroup {
  code: string; //petit code affioché dans l'icone
  title: string;
  items: string[]; //une LISTE de textes
}

export interface Job {
  company: string;
  url: string;        
  logo: string;       
  activity: string;   
  dates: string;
  place: string;
  role: string;
  points: string[];   
  result: string;
  stack: string[];
}

//un type union : l avaleur ne peut pas etre que l'un de ces 3 textes
export type ProjectCategory = 'dev' | 'bi' | 'both';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  category: ProjectCategory;
  context: string;
  title: string;
  description: string;
  stack: string[];
  image?: string; //champ optionnel
  imagePlaceholder: string;
  links: ProjectLink[];
}

export interface Education {
  degree: string;
  school: string;
  years: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface About {
  title: string;
  text: string;
  stats: Stat[];
}
