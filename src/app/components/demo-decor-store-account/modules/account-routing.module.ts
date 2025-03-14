
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDecorStoreAccountComponent } from '../demo-decor-store-account.component';

const routes: Routes = [{ path: '', component: DemoDecorStoreAccountComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
