import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Experience } from './sections/experience/experience';

@Component({
  imports: [RouterOutlet, Header, Hero, About, Skills, Experience],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
}
