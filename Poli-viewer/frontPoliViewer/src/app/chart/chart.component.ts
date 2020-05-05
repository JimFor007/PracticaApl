import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { EventosService } from '../services/eventos.service';
@Component({
  selector: 'app-barchart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit{

  eventos: any=[];

  constructor(private eventosService: EventosService) { }

  /*public doughnutChartLabels = ['Big Data', 'Cyber Security', 'Maratones de programación'];
  public doughnutChartData = [120, 150, 180];*/
  public doughnutChartType = 'doughnut';

  public doughnutChartLabels=[];
  public doughnutChartData=[];

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents (){
    this.eventosService.getAllEvents().subscribe (
      res => {
        this.eventos = res;
        for (let i = 0; i<this.eventos.length; i++) {
          this.doughnutChartLabels.push(this.eventos[i].nombre);
          this.doughnutChartData.push(Number(this.eventos[i].numberParticipants)); 
        }
      }, error => console.error(error)
    );
  }
}