
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDecorStoreCartComponent } from '../demo-decor-store-cart.component';

const routes: Routes = [{ path: '', component: DemoDecorStoreCartComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
