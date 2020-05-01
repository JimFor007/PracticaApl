import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  Admins;

  constructor(private http: HttpClient) { }

  getAllAdmins(){
    this.http.get('localhost:3030/admin/').subscribe (
      (res: any) => {
         this.Admins = res; 
      }
    ), (err: any) => {
      console.log(err);
    }
    return this.Admins;
  }
}
