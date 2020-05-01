import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {User} from '../models/user.models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { values } from 'd3';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  Admins: any = [];

  UsernameInput: String='';
  passwordInput: String='';

  


  constructor(private UserService: UsersService, private router: Router) { }

  getData(){
    this.UserService.getAllAdmins ().subscribe (
      res => {
        this.Admins = res
      },
      err => console.error(err)
    );
  }


  verifyUser(UsernameInput,passwordInput){
    let auth = false;
    for (let i = 0; i < this.Admins.length; i++) {
      if(UsernameInput == this.Admins[i].userName && passwordInput == this.Admins[i].password){
        this.router.navigate (['']);
        auth = true;
      }
    }
    if(!auth)
      alert('Usuario o contraseña incorrecta')
  
}


  ngOnInit(): void {
    this.getData();
  }

}
