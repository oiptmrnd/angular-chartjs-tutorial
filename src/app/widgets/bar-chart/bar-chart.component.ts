import { Component, OnInit, ElementRef } from '@angular/core';

import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
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

  }


  getdata() {
    this.oip.getCountryResult().then(res => {

      console.log(res);
    })
      .catch(error => {

      })
  }


}
