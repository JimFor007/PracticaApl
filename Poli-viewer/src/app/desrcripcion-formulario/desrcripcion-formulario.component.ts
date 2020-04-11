import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desrcripcion-formulario',
  templateUrl: './desrcripcion-formulario.component.html',
  styleUrls: ['./desrcripcion-formulario.component.css']
})
export class DesrcripcionFormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addUser(nombre, correo, carrera, id) {
    console.log("usuario añadido: ", nombre.value, correo.value, carrera.value, id.value);
    return false;
  }
}
