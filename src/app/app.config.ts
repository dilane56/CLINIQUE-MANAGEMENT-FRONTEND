import { ApplicationConfig } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import {authInterceptor} from './core/interceptor/interceptor'; // Assure-toi que ce fichier existe
 // Assure-toi que ce fichier existe

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // ✅ Corrigé
    provideRouter(routes), // ✅ Corrigé (fermeture correcte de la fonction)
    provideHttpClient(
      withInterceptors([authInterceptor])
    ), // ✅ Corrigé (bonne indentation et placement)
    provideAnimations(), // ✅ Remplace bien HttpClientModule
  //  provideMatSnackBar() // ✅ Alternative correcte à MatSnackBarModule
  ]
};
