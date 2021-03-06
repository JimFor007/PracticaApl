import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './models/data.models';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poli-viewer';


  data: Observable<Data>;

  
  constructor(private http: HttpClient) {
   this.data = this.http.get<Data>('./assets/data.json');
 }
 
}
