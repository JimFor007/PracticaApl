import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent implements OnInit {

  name:string;
  description:string;
  duration:string;
  virtual: string;
  place:string;

  constructor() { }

  ngOnInit(): void {
  }
  
  create (){
    alert("EVENTO CREADO :)");
  }
}
