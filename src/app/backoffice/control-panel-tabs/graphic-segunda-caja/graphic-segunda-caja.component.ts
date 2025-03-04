import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphic-segunda-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-segunda-caja.component.html',
  styleUrl: './graphic-segunda-caja.component.scss'
})
export class GraphicSegundaCajaComponent implements OnInit {

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      }
    }
  };

  public barChartLabels: string[] = ["Producto A", "Producto B", "Producto C", "Producto D"];
  
  public barChartData: ChartDataset<'bar'>[] = [{
    data: [10, 20, 15, 5],
    label: "Ventas",
    backgroundColor: [],
  }];

  public barChartType: ChartType = 'bar';

  ngOnInit(): void {}
}
