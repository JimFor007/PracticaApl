import { Component, OnInit } from '@angular/core';
import { EventosService } from '../services/eventos.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  

  eventos:any = [];


  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents (){
    this.eventos = this.eventosService.getAllEvents ().subscribe (
      events => {
        this.eventos = events;
      }, error => console.error(error)
    );
  }
}
