import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from '@pages/pages.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { Grafica1Component } from '@pages/grafica1/grafica1.component';
import { ProgressComponent } from '@pages/progress/progress.component';
import {AccountSettingsComponent} from "@pages/account-settings/account-settings.component";
import {RxjsComponent} from "@pages/rxjs/rxjs.component";
import {PromisesComponent} from "@pages/promises/promises.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'grafica1', component: Grafica1Component },
      { path: 'progress', component: ProgressComponent },
      { path: 'settings', component: AccountSettingsComponent },
      { path: 'promises', component: PromisesComponent },
      { path: 'rxjs', component: RxjsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
