import { Injectable } from '@angular/core';

export interface Cajero {
  id: number;
  serie: string;
  modelo: string;
  ubicacion: string; // Sin tilde
  estado: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private listaCajeros: Cajero[] = [
    { id: 1, serie: 'ATM001', modelo: 'NCR 6683', ubicacion: 'Mall del Sol', estado: 'Operativo' },
    { id: 2, serie: 'ATM002', modelo: 'Diebold Nixdorf', ubicacion: 'Terminal Terrestre', estado: 'Mantenimiento' },
    { id: 3, serie: 'ATM003', modelo: 'Hyosung Monimax', ubicacion: 'Centro Gye', estado: 'Fuera de Servicio' },
    { id: 4, serie: 'ATM004', modelo: 'NCR 5886', ubicacion: 'Aeropuerto', estado: 'Operativo' },
    { id: 5, serie: 'ATM005', modelo: 'Diebold Opteva', ubicacion: 'Univ. Guayaquil', estado: 'Operativo' },
    { id: 6, serie: 'ATM006', modelo: 'Diebold DNS ', ubicacion: 'Cuenca', estado: 'Operativo' }
  ];

  getTodos() {
    return [...this.listaCajeros];
  }

  actualizar(cajeroEditado: Cajero) {
    const index = this.listaCajeros.findIndex(c => c.id === cajeroEditado.id);
    if (index !== -1) {
      this.listaCajeros[index] = { ...cajeroEditado };
    }
  }

  eliminar(id: number) {
    this.listaCajeros = this.listaCajeros.filter(c => c.id !== id);
    return this.getTodos();
  }
}