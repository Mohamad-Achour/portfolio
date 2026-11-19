import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly profile = PROFILE;
}
