import {Component, OnInit} from '@angular/core';
declare function customInitFunctions():void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    customInitFunctions();
  }
}
