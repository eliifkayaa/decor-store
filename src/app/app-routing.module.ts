import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./components/demo-decor-store/modules/home.module').then(m => m.HomeModule)},
  {path: 'about', loadChildren: () => import('./components/demo-decor-store-about/modules/about.module').then(m => m.AboutModule)},
  {path: 'account', loadChildren: () => import('./components/demo-decor-store-account/modules/account.module').then(m => m.AccountModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
