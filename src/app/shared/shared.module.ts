import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from '@shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '@shared/header/header.component';
import { SidebarComponent } from '@shared/sidebar/sidebar.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
