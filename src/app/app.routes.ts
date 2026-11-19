import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProjectDetail } from './pages/project-detail/project-detail';

export const routes: Routes = [
  { path: '', component: Home, title: 'Mohamad Achour · Portfolio' },
  { path: 'projets/:id', component: ProjectDetail, title: 'Étude de cas · Mohamad Achour' },
  { path: '**', redirectTo: '' },
];