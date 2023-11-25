import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private apiUrl = 'http://localhost:3002';
  private data = { nombre: '',
  apellidos: '',
  dni: '',
  email: '',
  fechaAlta: ''}

  constructor(private http: HttpClient) {}

  insertarDatos(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/insertarEmpleado`, data);
  }

  obtenerEmpleados(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/obtenerEmpleados`);
  }
  
}
