import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empleado-nuevo',
  templateUrl: './empleado-nuevo.component.html',
  styleUrls: ['./empleado-nuevo.component.css']
})
export class EmpleadoNuevoComponent {
  datosEnviados: boolean = false;

  constructor(private dbService: DbService){}

  formData = {
    nombre: '',
    apellidos: '',
    dni: '',
    email: ''
  };

  submitForm(form: NgForm) {
    if (form.valid) {
      const data = {
        nombre: this.formData.nombre,
        apellidos: this.formData.apellidos,
        dni: this.formData.dni,
        email: this.formData.email,
        fechaAlta: new Date(),
      };

      this.dbService.insertarDatos(data).subscribe(
        response => {
          console.log('Datos insertados:', response);
          this.datosEnviados = true;
        },
        error => console.error('Error al insertar datos:', error)
      );
    }
  }

}
