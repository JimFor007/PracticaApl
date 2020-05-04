import { Component, OnInit } from '@angular/core';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.css']
})
export class MisEventosComponent implements OnInit {
  eventos: any;
  idAdmin: string;


  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
    this.idAdmin = localStorage.getItem('idAdmin');
    this.getAllMyEvents ();
   }

  getAllMyEvents (){
    this.eventosService.getEventByAdmin (this.idAdmin).subscribe (
      res => {
        this.eventos = res;
      }, error => console.log(error)
    );
  }

  getEvent({ nombre }) {
    console.log(nombre);
  }
}
