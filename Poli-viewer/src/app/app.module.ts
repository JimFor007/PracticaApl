import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescripcionEventoComponent } from './descripcion-evento/descripcion-evento.component';
import { DesrcripcionFormularioComponent } from './desrcripcion-formulario/desrcripcion-formulario.component';
import { IndexComponent } from './index/index.component';
import { EventosComponent } from './eventos/eventos.component';
import { LogInComponent } from './log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from './chart/chart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DescripcionEventoComponent,
    DesrcripcionFormularioComponent,
    IndexComponent,
    EventosComponent,
    LogInComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
