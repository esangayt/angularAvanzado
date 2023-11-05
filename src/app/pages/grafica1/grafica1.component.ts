import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public labels: string[] = [
    'Download Sales',
    'In-Store Sales',
  ];

  public data: number[] = [350, 450]
  public title: string = 'Sales'
}
