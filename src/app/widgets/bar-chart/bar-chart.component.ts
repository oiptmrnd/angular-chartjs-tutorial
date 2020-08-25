<<<<<<< HEAD
import { Component, OnInit, ElementRef } from '@angular/core';

import { DataService } from 'src/app/services/data/data.service';
=======
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
>>>>>>> dfeda356e57c8bc6a5e1e04dfe24f84ab07073d5

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
<<<<<<< HEAD
  private chartContainer: ElementRef;
  public data = [
    { "Framework": "Vue", "Stars": "166443", "Released": "2014" },
    { "Framework": "React", "Stars": "150793", "Released": "2013" },
    { "Framework": "Angular", "Stars": "62342", "Released": "2016" },
    { "Framework": "Backbone", "Stars": "27647", "Released": "2010" },
    { "Framework": "Ember", "Stars": "21471", "Released": "2011" },
  ];
  dataByCountry: any;
  private svg;
  private margin = 50;
  private width = 1080 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  constructor(private oip: DataService) { }

  ngOnInit() {

    this.getdata();
=======
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  constructor() { }

  ngOnInit() {

>>>>>>> dfeda356e57c8bc6a5e1e04dfe24f84ab07073d5

  }


<<<<<<< HEAD
  getdata() {
    this.oip.getCountryResult().then(res => {

      console.log(res);
    })
      .catch(error => {

      })
  }


=======
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }
>>>>>>> dfeda356e57c8bc6a5e1e04dfe24f84ab07073d5
}
