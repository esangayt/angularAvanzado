import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from '@pages/nopagefound/nopagefound.component';
import { PagesRoutingModule } from '@pages/pages-routing.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/page.module').then(module => module.PageModule)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
