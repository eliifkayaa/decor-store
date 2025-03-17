import { NgModule } from '@angular/core';
import { Demo26ShopComponent } from '../demo26-shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../../../module/shared/shared.module';


@NgModule({
  declarations: [Demo26ShopComponent],
  imports: [
    SharedModule,
    ShopRoutingModule,
  ]
})
export class ShopModule { }
