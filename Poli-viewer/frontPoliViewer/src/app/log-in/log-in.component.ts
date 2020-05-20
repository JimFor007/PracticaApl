import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  Admins: any = [];

  UsernameInput: string = '';
  passwordInput: string = '';

 snackBar;

  constructor(private AdminService: AdminService, private router: Router, private toastr: ToastrService) { }

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
        localStorage.setItem("idAdmin", this.Admins[i].idAdmin);
        this.router.navigate(['admin']);
        auth = true;
      }
    }
    if (!auth)
    this.toastr.error("Usuario o contraseña incorrecta");
  }
}
