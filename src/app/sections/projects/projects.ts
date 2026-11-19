import { Component, computed, signal } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';
import { ProjectType } from '../../data/portfolio.models';

type Filter = 'all' | 'dev' | 'bi';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  // Les 3 boutons du filtre
  protected readonly filters: { id: Filter; label: string }[] = [
    { id: 'all', label: 'Tous' },
    { id: 'dev', label: 'Full Stack' },
    { id: 'bi', label: 'Business Intelligence' },
  ];

  // Les groupes, dans l'ordre d'affichage
  private readonly groupDefs: { type: ProjectType; title: string }[] = [
    { type: 'stage', title: 'En entreprise' },
    { type: 'academique', title: 'Projets académiques · UTBM' },
    { type: 'personnel', title: 'Projet personnel' },
  ];

  protected readonly active = signal<Filter>('all');

  private readonly filtered = computed(() => {
    const f = this.active();
    return PROJECTS.filter((p) => f === 'all' || p.category === f || p.category === 'both');
  });

  protected readonly groups = computed(() =>
    this.groupDefs.map((group) => ({
      ...group,
      projects: this.filtered().filter((p) => p.type === group.type),
    })),
  );
}