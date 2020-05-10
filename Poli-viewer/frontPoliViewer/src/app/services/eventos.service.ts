import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../models/event.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  getAllEvents() {
    return this.http.get(`http://localhost:3030/events/`);
  }

  getEventByAdmin(idAdmin: string) {
    return this.http.get(`http://localhost:3030/events/byAdmin/${idAdmin}`);
  }

  getEventById(idEvent: string) {
    return this.http.get(`http://localhost:3030/events/${idEvent}`);
  }

  updateEvent(idEvent: number, updatedEvent: any){
    return this.http.put(`http://localhost:3030/events/${idEvent.toString()}`, updatedEvent);
  }

  createEvent(idAdmin: string, newEvent: any): Observable<Event>{
    return this.http.post<Event>(`http://localhost:3030/events/${idAdmin}`, newEvent);
  }

}
