import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDispositivoComponent } from './components/list-dispositivo/list-dispositivo.component';
import { AddDispositivoComponent } from './components/add-dispositivo/add-dispositivo.component';

const routes: Routes = [
  { path: 'list', component:ListDispositivoComponent},
  { path: 'add', component:AddDispositivoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
