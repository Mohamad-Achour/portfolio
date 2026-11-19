import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROJECTS } from './data/portfolio.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projets/:id',
    renderMode: RenderMode.Prerender,
    // La liste des :id pour lesquels générer une page : les projets qui ont une étude de cas
    async getPrerenderParams() {
      return PROJECTS.filter((p) => p.caseStudy).map((p) => ({ id: p.id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];