import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avanzado';
  private linkTheme = document.querySelector('#theme')

  constructor() {
    const url = localStorage.getItem('theme') || `./assets/css/colors/purple.css`

    this.linkTheme!.setAttribute('href', url)
  }
}
