import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  updateEvent(id: string, updatedEvent: any){
    return this.http.put(`http://localhost:3030/events/${id}`, updatedEvent);
  }

}
