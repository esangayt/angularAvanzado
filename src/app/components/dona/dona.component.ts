import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ChartData, ChartType} from "chart.js";

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnChanges{
  @Input() public title: string = 'Sin título'
  @Input() public labels!: string[]
  @Input() public data!: number[]

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData!: ChartData<'doughnut'>

  constructor() {  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initDonut(changes)
  }

  initDonut(changes: SimpleChanges){
    if (this.labels.length === 0 || this.data.length === 0)
      throw new Error('labels and data are required')

    if (this.labels.length !== this.data.length) {
      throw new Error('labels and data must have the same length')
    }

    this.doughnutChartData = {
      labels: changes['labels'].currentValue,
      datasets: [
        { data: changes['data'].currentValue }
      ],
    };
  }
}
