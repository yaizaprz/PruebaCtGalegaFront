import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DbService } from 'src/services/db.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent  implements OnInit{
  displayedColumns: string[] = ['nombre', 'apellidos', 'dni', 'email', 'fechaAlta'];
  dataSource = new MatTableDataSource<any>();

  constructor(private dbService: DbService){}
  
  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados() {
    this.dbService.obtenerEmpleados().subscribe(
      (response) => {
        this.dataSource = response.empleados;
      },
      (error) => {
        console.error('Error al obtener empleados:', error);
      }
    );
  }

}
