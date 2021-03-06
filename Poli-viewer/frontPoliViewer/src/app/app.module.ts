import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import {ToastrModule} from 'ngx-toastr';
//import { AlertsModule } from 'angular-alert-module';

// IMPORT COMPONENTS
import { AppComponent } from './app.component';
import { DesrcripcionFormularioComponent } from './desrcripcion-formulario/desrcripcion-formulario.component';
import { IndexComponent } from './index/index.component';
import { EventosComponent } from './eventos/eventos.component';
import { LogInComponent } from './log-in/log-in.component';
import { ChartComponent } from './chart/chart.component';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';
import { EventCreationComponent } from './event-creation/event-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    DesrcripcionFormularioComponent,
    IndexComponent,
    EventosComponent,
    LogInComponent,
    ChartComponent,
    MisEventosComponent,
    EventCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    ToastrModule.forRoot({
      timeOut:2000,
      progressBar:true,
      preventDuplicates:true,
      progressAnimation:"increasing",
      positionClass:'toast-top-full-width',
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
