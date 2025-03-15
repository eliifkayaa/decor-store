import { NgModule } from '@angular/core';
import { DemoDecorStoreCartComponent } from '../demo-decor-store-cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../../../module/shared/shared.module';


@NgModule({
  declarations: [DemoDecorStoreCartComponent],
  imports: [
    SharedModule,
    CartRoutingModule
  ]
})
export class CartModule { }
