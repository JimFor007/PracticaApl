import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { EventosService } from '../services/eventos.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-barchart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit{

  eventos: any=[];

  constructor(private eventosService: EventosService) { }

  barChartOptions: ChartOptions = {
    responsive: true,
    scales:{
      yAxes:[{
        ticks:{
          beginAtZero: true,
          stepSize:10
        }
      }
      ]
    }
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Eventos' }
  ];
  
  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents (){
    this.eventosService.getAllEvents().subscribe (
      res => {
        this.eventos = res;
        for (let i = 0; i<this.eventos.length; i++) {
          this.barChartLabels.push(this.eventos[i].nombre);
          this.barChartData[0].data.push(this.eventos[i].numberParticipants); 
        }
      }, error => console.error(error)
    );
  }
  
}