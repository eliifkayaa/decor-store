import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistRoutingModule } from './wishlist-routing.module';
import { DemoDecorStoreWishlistComponent } from '../demo-decor-store-wishlist.component';


@NgModule({
  declarations: [DemoDecorStoreWishlistComponent],
  imports: [
    CommonModule,
    WishlistRoutingModule
  ]
})
export class WishlistModule { }
