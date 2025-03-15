import { NgModule } from '@angular/core';
import { DemoDecorStoreCheckoutComponent } from '../demo-decor-store-checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from '../../../module/shared/shared.module';


@NgModule({
  declarations: [DemoDecorStoreCheckoutComponent],
  imports: [
    SharedModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
