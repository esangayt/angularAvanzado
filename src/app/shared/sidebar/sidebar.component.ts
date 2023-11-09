import { Component } from '@angular/core';
import {items, SidebarService} from "../../services/sidebar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public items!: items[]

  constructor(private sideBar: SidebarService) {
    this.items = this.sideBar.items
  }

}
