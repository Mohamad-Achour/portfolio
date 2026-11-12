import { Component } from '@angular/core';
import {JOBS} from '../../data/portfolio.data';

@Component({
  imports: [],
  selector: 'app-experience',
  styleUrl: './experience.scss',
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly jobs = JOBS;
}
