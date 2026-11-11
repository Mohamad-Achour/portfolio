import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  name = 'Mohamad Achour';
  title = 'Ingénieur Full Stack & Business Intelligence';
  location = 'Strasbourg · mobilité France entière';
  photo = 'images/mohamad.webp';
  cvFullStack = 'cv/Mohamad_ACHOUR_CV_FullStack.pdf';
  cvBi = 'cv/Mohamad_ACHOUR_CV_BI.pdf';
  linkedin = 'https://www.linkedin.com/in/mohamad-achour-771067245';
  github = 'https://github.com/Mohamad-Achour';   
}