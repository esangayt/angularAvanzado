import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from '@pages/pages.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { Grafica1Component } from '@pages/grafica1/grafica1.component';
import { ProgressComponent } from '@pages/progress/progress.component';
import {AccountSettingsComponent} from "@pages/account-settings/account-settings.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'grafica1', component: Grafica1Component },
      { path: 'progress', component: ProgressComponent },
      { path: 'settings', component: AccountSettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
