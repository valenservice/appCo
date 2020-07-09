import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('ChartLabels') doughnutChartLabels: [] = [];
  @Input('ChartData') doughnutChartData: [] = [];
  @Input('ChartType') doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
