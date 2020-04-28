import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DesrcripcionFormularioComponent } from './desrcripcion-formulario/desrcripcion-formulario.component';
import { EventosComponent } from './eventos/eventos.component';
import { LogInComponent } from './log-in/log-in.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
{path: '', component: IndexComponent},
{path: 'event', component: EventosComponent},
{path:'log-in', component: LogInComponent},
{path: 'evento', component: EventosComponent},
{path: 'inscripcion', component: DesrcripcionFormularioComponent},
{path: 'charts', component:ChartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
