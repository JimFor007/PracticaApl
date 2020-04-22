import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DesrcripcionFormularioComponent } from './desrcripcion-formulario/desrcripcion-formulario.component';
import { EventosComponent } from './eventos/eventos.component';

const routes: Routes = [
{path: '', component: IndexComponent},
{path: 'evento', component: EventosComponent},
{path: 'evento/inscripcion', component: DesrcripcionFormularioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
