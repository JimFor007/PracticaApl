import { Component, OnInit } from '@angular/core';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.css']
})
export class MisEventosComponent implements OnInit {
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
