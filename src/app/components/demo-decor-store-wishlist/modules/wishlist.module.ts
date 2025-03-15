import { NgModule } from '@angular/core';
import { WishlistRoutingModule } from './wishlist-routing.module';
import { DemoDecorStoreWishlistComponent } from '../demo-decor-store-wishlist.component';
import { SharedModule } from '../../../module/shared/shared.module';


@NgModule({
  declarations: [DemoDecorStoreWishlistComponent],
  imports: [
    SharedModule,
    WishlistRoutingModule
  ]
})
export class WishlistModule { }
