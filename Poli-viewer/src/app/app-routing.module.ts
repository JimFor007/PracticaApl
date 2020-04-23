import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DesrcripcionFormularioComponent } from './desrcripcion-formulario/desrcripcion-formulario.component';
import { EventosComponent } from './eventos/eventos.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
{path: '', component: IndexComponent},
<<<<<<< HEAD
{path: 'event', component: EventosComponent},
{path:'log-in', component: LogInComponent}
=======
{path: 'evento', component: EventosComponent},
{path: 'evento/inscripcion', component: DesrcripcionFormularioComponent},
>>>>>>> c12d8f5ed56e013aa652251a5858395e7b5070fb
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
