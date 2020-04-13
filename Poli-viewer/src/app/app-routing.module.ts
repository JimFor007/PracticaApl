import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DesrcripcionFormularioComponent } from './desrcripcion-formulario/desrcripcion-formulario.component';

const routes: Routes = [
{path: '', component: IndexComponent},
{path: 'event', component: DesrcripcionFormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
