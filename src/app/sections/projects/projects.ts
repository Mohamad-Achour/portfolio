import { Component, computed, signal } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';

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

  // Le filtre actuellement choisi (au départ : "Tous")
  protected readonly active = signal<Filter>('all');

  // La liste des projets à afficher, recalculée automatiquement
  protected readonly shown = computed(() => {
    const f = this.active();
    return PROJECTS.filter(
      (p) => f === 'all' || p.category === f || p.category === 'both',
    );
  });
}