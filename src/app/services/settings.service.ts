import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme')

  constructor() {
    const url = localStorage.getItem('theme') || `./assets/css/colors/purple.css`

    this.linkTheme!.setAttribute('href', url)
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
