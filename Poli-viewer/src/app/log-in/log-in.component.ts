import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {User} from '../models/user.models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  Users;

  UsernameInput: String='';
  passwordInput: String='';

  


  constructor(private UserService: UsersService, private router: Router) { 
    this.getData();
  }

  getData(){
    this.Users=this.UserService.getAllUsers ();
  }


  verifyUser(UsernameInput,passwordInput){
    let auth = false;
    for (let i = 0; i < this.Users.length; i++) {
      if(UsernameInput == this.Users[i].username && passwordInput == this.Users[i].password){
        this.router.navigate (['admin']);
        auth = true;
      }    
    }
    if(!auth)
      alert('Usuario o contraseña incorrecta')
  
}


  ngOnInit(): void {
  }

}
