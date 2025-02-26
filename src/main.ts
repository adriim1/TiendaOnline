/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

import {
  ArcElement,
  BarController,
  BarElement, 
  CategoryScale,
  Chart,
  DoughnutController,
  Legend, 
  LinearScale, 
  LineController, 
  LineElement,
  PieController, 
  PointElement,
  Tooltip
} from 'chart.js';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideRouter(routes), 
  ]
}).catch((err) => console.error(err));


Chart.register(
  ArcElement, PieController, DoughnutController, Legend, Tooltip,
  BarController, BarElement, CategoryScale, LinearScale, LineElement, LineController, PointElement
);
