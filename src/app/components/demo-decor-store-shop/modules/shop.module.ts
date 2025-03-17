import { NgModule } from '@angular/core';
import { SharedModule } from '../../../module/shared/shared.module';
import { DemoDecorStoreShopComponent } from '../demo-decor-store-shop.component';
import { ShopRoutingModule } from './shop-routing.module';


@NgModule({
  declarations: [DemoDecorStoreShopComponent],
  imports: [
    SharedModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
