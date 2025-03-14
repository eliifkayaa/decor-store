import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDecorStoreCartComponent } from '../demo-decor-store-cart.component';
import { CartRoutingModule } from './cart-routing.module';


@NgModule({
  declarations: [DemoDecorStoreCartComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
