import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { EventosService } from '../services/eventos.service';
@Component({
  selector: 'app-barchart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit{

  eventos: any;


  constructor(private eventosService: EventosService) { }

  public doughnutChartLabels = ['Big Data', 'Cyber Security', 'Maratones de programación'];
  public doughnutChartData = [120, 150, 180];
  public doughnutChartType = 'doughnut';
  
  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents (){
    this.eventos = this.eventosService.getAllEvents ().subscribe (
      res => {
        this.eventos = res;
      }, error => console.error(error)
    );
  }
  
}