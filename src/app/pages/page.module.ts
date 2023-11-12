import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '@shared/shared.module';
import {PagesRoutingModule} from "@pages/pages-routing.module";
import {ComponentsModule} from "../components/components.module";
import {FormsModule} from "@angular/forms";
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ]
})
export class PageModule { }
