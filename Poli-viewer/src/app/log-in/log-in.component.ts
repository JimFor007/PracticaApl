import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import { Router } from '@angular/router';

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
        localStorage.setItem ("currentUser-name", UsernameInput);
        localStorage.setItem ("currentUser-password", passwordInput);
        this.router.navigate (['admin']);
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
