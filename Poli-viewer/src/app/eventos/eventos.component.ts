import { Component, OnInit } from '@angular/core';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  

  eventos;


  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents (){
    this.eventos = this.eventosService.getAllEvents ().subscribe (
      res => {
        this.eventos = res;
      }, error => console.error(error)
    );
  }

  getEvent({ nombre }) {
    console.log(nombre);
  }

}
