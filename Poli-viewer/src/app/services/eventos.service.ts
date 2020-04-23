import { Injectable } from '@angular/core';
import { ALL_EVENTS } from '../mockinfo/events.db.mock'

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor() { }

  getAllEvents() {
    return ALL_EVENTS;
  }
}
