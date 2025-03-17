
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDecorStoreShopComponent } from '../demo-decor-store-shop.component';

const routes: Routes = [{ path: '', component: DemoDecorStoreShopComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
