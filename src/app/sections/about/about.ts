import { Component } from '@angular/core';
import { ABOUT } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly about = ABOUT;
}