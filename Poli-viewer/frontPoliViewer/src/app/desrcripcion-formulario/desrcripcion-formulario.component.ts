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

  event: any = [];
  constructor(private activedRoute: ActivatedRoute, private EventosService: EventosService) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if(params.idEvent){
      this.EventosService.getEventById(params.idEvent).subscribe(
        res => {
          this.event = res;
        }, error => console.log(error)
      );
    }
  }

  inscripcion(nombre, correo, carrera, id) {
    delete this.event.createdAt;
    this.event.numberParticipants += 1;
    this.EventosService.updateEvent (this.event.idEvent, this.event).subscribe (
      res=>{
          console.log(res);
      }, error => console.log(error)
    );
    
  }
}
