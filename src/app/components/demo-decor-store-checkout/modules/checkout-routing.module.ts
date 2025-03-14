
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDecorStoreCheckoutComponent } from '../demo-decor-store-checkout.component';

const routes: Routes = [{ path: '', component: DemoDecorStoreCheckoutComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
