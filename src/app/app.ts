import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaGestionComponent } from './tabla-gestion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TablaGestionComponent], // Esto soluciona el error NG8001
  templateUrl: './app.html', // Asegúrate de que el archivo se llame app.html
  styleUrls: ['./app.css']
})
export class AppComponent { // Cambiado de 'App' a 'AppComponent' para estandarizar
  title = 'mi-proyecto-crud';
}