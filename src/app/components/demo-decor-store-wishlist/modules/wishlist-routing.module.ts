
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDecorStoreWishlistComponent } from '../demo-decor-store-wishlist.component';


const routes: Routes = [{ path: '', component: DemoDecorStoreWishlistComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule { }
