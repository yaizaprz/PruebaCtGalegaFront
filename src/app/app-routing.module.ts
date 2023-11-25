import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoNuevoComponent } from './empleado-nuevo/empleado-nuevo.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';

const routes: Routes = [
  {path: 'empleado-nuevo', component: EmpleadoNuevoComponent},
  {path: 'lista-empleados', component: ListaEmpleadosComponent},
  {path: '', pathMatch: 'full', redirectTo:'lista-empleados'},
  {path: '**', pathMatch: 'full', redirectTo:'lista-empleados'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
