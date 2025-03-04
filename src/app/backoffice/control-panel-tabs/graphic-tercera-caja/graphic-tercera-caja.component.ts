import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-tercera-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-tercera-caja.component.html',
  styleUrl: './graphic-tercera-caja.component.scss'
})
export class GraphicTerceraCajaComponent implements OnInit {

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Meses',
          font: { size: 14, weight: 'bolder' }
        }
      },
      y: {
        title: {
          display: true,
          text: 'Progreso %',
          font: { size: 14, weight: 'bolder' }
        },
        ticks: {
          stepSize: 10,
        }
      }
    }
  };

  public lineChartLabels: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
  
  public lineChartData: ChartDataset<'line'>[] = [{
    data: [10, 25, 40, 35, 5, 100],
    label: 'Progreso',
    backgroundColor: [],
  }];

  public lineChartType: ChartType = 'line';

  ngOnInit(): void {}
}