import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDecorStoreCheckoutComponent } from '../demo-decor-store-checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';


@NgModule({
  declarations: [DemoDecorStoreCheckoutComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
