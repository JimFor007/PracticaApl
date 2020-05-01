import { Injectable } from '@angular/core';
import { ALL_USERS } from '../mockinfo/users.db.mock';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAllUsers(){
    return ALL_USERS;
  }
}
