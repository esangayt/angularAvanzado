import {Component, OnInit} from '@angular/core';
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  constructor(private settings:SettingsService) {
  }

  ngOnInit(): void {
    this.settings.checkCurrentTheme()
  }

  changeTheme(theme:string){
    this.settings.changeTheme(theme)
  }
}
