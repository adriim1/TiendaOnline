import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphic-primera-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-primera-caja.component.html',
  styleUrl: './graphic-primera-caja.component.scss'
})
export class GraphicPrimeraCajaComponent implements OnInit {

  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      },
      tooltip: {},
      title: {
        text: 'Primer gráfico',
        display: true,
      }
    }
  };

  public doughnutChartLabels: string[] = ["Label 1", "Label 2", "Label 3", "Label 4"];
  
  public doughnutChartData: { labels: string[], datasets: ChartDataset<'doughnut'>[] } = {
    labels: this.doughnutChartLabels,
    datasets: [{
      data: [20, 30, 40, 50],
      backgroundColor: ["red", "black", "green", "yellow"],
    }]
  };

  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {}
}
