import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, Chart } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { DataService } from 'src/app/services/data/data.service';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      position: 'left',
      text: 'Worldwide Covid-19 case summary'
    },

    legend: {
      position: 'bottom',
      align: 'start'
    },
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{}], yAxes: [{
        ticks: {
          min: 500
        }
      }]
    },
  };
  public barChartLabels: Label[] = ['deaths', 'confirmed', 'recovered'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartColors: Color[] = [
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public barChartData: ChartDataSets[];
  constructor(private oip: DataService) { }

  ngOnInit() {

    this.getDataBycountry();
  }

  getDataBycountry() {
    this.oip.getCountryResult().then(res => {

      this.barChartLabels = Object.values(res).map(key => key.Country);
      let deaths = Object.values(res).map(key => key.Deaths
      );
      let confirmed = Object.values(res).map(key => key.Confirmed
      );
      let recovered = Object.values(res).map(key => key.Recovered
      );
      console.log(res);

      this.barChartData = [{
        data: deaths, label: 'Deaths'
      },
      {
        data: confirmed, label: 'Confirmed'
      }, {
        data: recovered, label: 'Recovered'
      }];

      this.barChartColors = [
        { // red
          backgroundColor: 'rgba(255,0,0,0.4)',
          borderColor: 'red',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
      ];



    })
      .catch(error => {
        console.log(error);
      });

  }
  // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }
}
