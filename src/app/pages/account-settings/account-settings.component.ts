import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  private linkTheme = document.querySelector('#theme')

  constructor() {
    const url = localStorage.getItem('theme') || `./assets/css/colors/purple.css`

    this.linkTheme!.setAttribute('href', url)
  }

  ngOnInit(): void {
    this.checkCurrentTheme()
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`

    this.linkTheme!.setAttribute('href', url)

    localStorage.setItem('theme', url)

    this.checkCurrentTheme()
  }

  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector')

    links.forEach(link => {

     link.classList.remove('working')
      const theme = link.getAttribute('data-theme')
      const newLink = `./assets/css/colors/${theme}.css`
      const currentTheme = this.linkTheme!.getAttribute('href')

      if (currentTheme === newLink){
       link.classList.add('working')
      }
    })
  }
}
