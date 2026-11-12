import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';


@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly profile = PROFILE;
}