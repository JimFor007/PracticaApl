import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Event } from '../models/event.model';
import { EventosService } from '../services/eventos.service'

@Component({
  selector: 'app-desrcripcion-formulario',
  templateUrl: './desrcripcion-formulario.component.html',
  styleUrls: ['./desrcripcion-formulario.component.css']
})
export class DesrcripcionFormularioComponent implements OnInit {
  
  rol = "asdf";
  event: any = [];
  constructor(private activedRoute: ActivatedRoute, private EventosService: EventosService) { }

  ngOnInit() {
    const { idEvent } = this.activedRoute.snapshot.params;
    if(idEvent){
      this.EventosService.getEventById(idEvent).subscribe(
        res => {
          this.event = res;
        }, error => console.log(error)
      );
    }
  }

  setRol(rol: string) {
    this.rol = rol;
  }

  inscripcion() {
    this.event.numberParticipants += 1;
    this.EventosService.updateEvent (this.event.idEvent, this.event).subscribe (
      res=>{
        console.log("******** EVENT UPDATED *******");
      },error => console.log(error)
    );
  }
}
