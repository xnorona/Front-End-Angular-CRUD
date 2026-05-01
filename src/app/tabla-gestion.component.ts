import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DatosService, Cajero } from './servicios/datos.service';
import { DialogoEditarComponent } from './dialogo-editar.component';

@Component({
  selector: 'app-tabla-gestion',
  standalone: true,
  imports: [
    CommonModule, MatTableModule, MatDialogModule, 
    MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './tabla-gestion.component.html',
  styleUrls: ['./app.css']
})
export class TablaGestionComponent implements OnInit {
  columnas = ['serie', 'modelo', 'ubicacion', 'estado', 'acciones'];
  dataSource!: MatTableDataSource<Cajero>;

  constructor(private datosService: DatosService, public dialog: MatDialog) {}

  ngOnInit() { this.refresh(); }

  refresh() {
    this.dataSource = new MatTableDataSource(this.datosService.getTodos());
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  borrar(id: number) {
    if(confirm('¿Eliminar registro?')) {
      this.dataSource.data = this.datosService.eliminar(id);
    }
  }

  abrirDialogo(cajero: Cajero) {
    const dialogRef = this.dialog.open(DialogoEditarComponent, {
      width: '400px',
      data: { ...cajero }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.datosService.actualizar(result);
        this.dataSource.data = this.datosService.getTodos(); // Refresco instantáneo
      }
    });
  }
}