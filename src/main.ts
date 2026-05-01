import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app'; // Cambia 'App' por 'AppComponent'

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));