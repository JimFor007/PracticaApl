import { Component, OnInit } from '@angular/core';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  

  eventos;


  constructor(private eventosService: EventosService) {
    this.getAllEvents();
   }

  ngOnInit(): void { }

  getAllEvents (){
    this.eventos = this.eventosService.getAllEvents ();
  }

  getEvent({ nombre }) {
    console.log(nombre);
  }

}
