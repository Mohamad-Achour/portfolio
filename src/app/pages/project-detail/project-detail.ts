import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  // Reçoit le ":id" de l'adresse /projets/:id
  readonly id = input.required<string>();

  // Le projet qui correspond à cet id
  protected readonly project = computed(() => PROJECTS.find((p) => p.id === this.id()));
}