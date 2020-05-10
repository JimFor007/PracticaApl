import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event.model'
import { EventosService } from '../services/eventos.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent implements OnInit {

  event: Event = {
    nombre: '',
    duracion: 0,
    descripcion: '',
    virtual: false,
    lugar: '',
    numberParticipants: 0,
  };

  constructor(private eventosService: EventosService, private router: Router) { }

  ngOnInit(): void {
  }
  
  create (name: string, description: string, duration: number, virtual: boolean, place: string){
    this.event.nombre = name;
    this.event.duracion = duration;
    this.event.descripcion = description; 
    this.event.virtual = virtual;
    this.event.lugar = place;
    this.eventosService.createEvent(localStorage.getItem ('idAdmin'), this.event).subscribe(
      (res:Event) => {
        alert ("SE HA CREADO EL EVENTO SATISFACTORIAMENTE");
        this.router.navigate (['admin']);
      }, error => console.error (error)
    );
  }
}
