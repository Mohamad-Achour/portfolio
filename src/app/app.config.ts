import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // Les liens avec "fragment" (#projets...) font défiler jusqu'à la section,
      // et chaque nouvelle page s'ouvre en haut
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
      // Passe le ":id" de l'adresse directement à input() dans le composant
      withComponentInputBinding(),
    ),
    provideClientHydration(withEventReplay()),
  ],
};