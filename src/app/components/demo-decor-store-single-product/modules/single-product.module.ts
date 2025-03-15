import { NgModule } from '@angular/core';
import { DemoDecorStoreSingleProductComponent } from '../demo-decor-store-single-product.component';
import { SingleProductRoutingModule } from './single-product-routing.module';
import { SharedModule } from '../../../module/shared/shared.module';


@NgModule({
  declarations: [DemoDecorStoreSingleProductComponent],
  imports: [
    SharedModule,
    SingleProductRoutingModule
  ]
})
export class SingleProductModule { }
