import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  getAllEvents() {
    return this.http.get('http://localhost:3030/events/');
  }

  getEventById(id: string) {
    return this.http.get(`http://localhost:3030/events/${id}`);
  }

  updateEvent(id: string, updatedEvent: any){
    return this.http.put(`http://localhost:3030/events/${id}`, updatedEvent);
  }

}
