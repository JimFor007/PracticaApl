import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  Admins: any = [];

  UsernameInput: string = '';
  passwordInput: string = '';




  constructor(private AdminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.AdminService.getAllAdmins().subscribe(
      res => {
        this.Admins = res;
      },
      err => console.error(err)
    );
  }


  verifyUser(UsernameInput: string, passwordInput: string) {
    let auth = false;
    for (let i = 0; i < this.Admins.length; i++) {
      if (UsernameInput == this.Admins[i].userName && passwordInput == this.Admins[i].password) {
        localStorage.setItem("currentUser-name", UsernameInput);
        localStorage.setItem("currentUser-password", passwordInput);
        this.router.navigate(['admin']);
        auth = true;
      }
    }
    if (!auth)
      alert('Usuario o contraseña incorrecta')
  }
}
