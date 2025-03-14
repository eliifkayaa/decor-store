import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo26ShopComponent } from '../demo26-shop.component';
import { ShopRoutingModule } from './shop-routing.module';


@NgModule({
  declarations: [Demo26ShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
