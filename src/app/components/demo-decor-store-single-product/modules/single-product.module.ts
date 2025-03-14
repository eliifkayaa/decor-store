import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDecorStoreSingleProductComponent } from '../demo-decor-store-single-product.component';
import { SingleProductRoutingModule } from './single-product-routing.module';


@NgModule({
  declarations: [DemoDecorStoreSingleProductComponent],
  imports: [
    CommonModule,
    SingleProductRoutingModule
  ]
})
export class SingleProductModule { }
