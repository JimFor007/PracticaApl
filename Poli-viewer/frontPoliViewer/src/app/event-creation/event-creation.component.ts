import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event.model'
import { EventosService } from '../services/eventos.service'
import { ActivatedRoute,Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent implements OnInit {

  idEvent: string;

  event: any = {
    nombre: '',
    duracion: 0,
    descripcion: '',
    virtual: false,
    lugar: '',
    date: null,
    numberParticipants: 0,
  };

  edit = false;

  constructor(private eventosService: EventosService, private router: Router, private avtivatedRoute: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.idEvent = this.avtivatedRoute.snapshot.params.idEvent;
    if(this.idEvent){
      this.eventosService.getEventById (this.idEvent).subscribe (
        res => {
          this.event = res;
          this.edit = true;
        },error => console.error (error)
      );
    }
  }
  
  update() {
    this.eventosService.updateEvent(this.event.idEvent, this.event).subscribe (
      res => {
        console.log (res);
      },error => console.error (error)
    );
    this.toastr.success("Evento actualizado correctamente");
  }

  create (){
    this.eventosService.createEvent(localStorage.getItem ('idAdmin'), this.event).subscribe(
      (res:Event) => {
        this.router.navigate (['admin']);
      }, error => console.error (error)
    );
    this.toastr.success("Evento creado correctamente");
  }
}
