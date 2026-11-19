import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Skills } from '../../sections/skills/skills';
import { Experience } from '../../sections/experience/experience';
import { Projects } from '../../sections/projects/projects';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Skills, Experience, Projects],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}