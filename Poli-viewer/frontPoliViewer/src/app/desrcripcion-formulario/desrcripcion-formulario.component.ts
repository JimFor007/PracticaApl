import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EventosService } from '../services/eventos.service'
import { UsersService } from '../services/users.service'
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-desrcripcion-formulario',
  templateUrl: './desrcripcion-formulario.component.html',
  styleUrls: ['./desrcripcion-formulario.component.css']
})
export class DesrcripcionFormularioComponent implements OnInit {
  
  rol:string;
  user: any = {
    nombre: "",
    apellidos: "",
    email: "",
    numberID: 0,
    carrera: "",
    codigo: 0
  }
  event: any = [];
  constructor(private activedRoute: ActivatedRoute, private EventosService: EventosService, private UsersService: UsersService,private toastr: ToastrService) { }

  ngOnInit() {
    const { idEvent } = this.activedRoute.snapshot.params;
    if(idEvent){
      this.EventosService.getEventById(idEvent).subscribe (
        res => {
          this.event = res;
        }, error => console.log (error)
      );
    }
  }

  submissionForm() {
    this.addParticipant ();
    this.addUser ();
    this.toastr.success("Ha sido añadido con exito!");
  }

  addParticipant() {
    this.event.numberParticipants += 1;
    this.EventosService.updateEvent (this.event.idEvent, this.event).subscribe (
      res=>{
        console.log ("******** EVENT UPDATED *******");
      },error => console.log (error)
    );
  }

  addUser() {
    this.UsersService.inscription(this.user).subscribe (
      res => {
        console.log ("******** MAIL SENDED *******");
      },error => console.error (error)
    );

  }

}
