import { Injectable } from '@angular/core';
import { ALL_USERS } from '../mockinfo/users.db.mock';
import { User } from '../models/user.models'; 
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  ALL_USERSDB: User[]=[
    {
      idUser:1,
      username:"seb",
      password:"123",
    },
    {
      idUser:2,
      username:"jifor",
      password:"ok",
    }
  ]

  ALL_USERS=this.ALL_USERSDB;
  

  constructor() { }

  getAllUsers(){
    return ALL_USERS;
  }
}
