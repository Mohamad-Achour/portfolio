import { Component } from '@angular/core';
import { SKILLS } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly groups = SKILLS;
}