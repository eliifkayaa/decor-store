import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDecorStoreFaqComponent } from '../demo-decor-store-faq.component';
import { FaqRoutingModule } from './faq-routing.module';


@NgModule({
  declarations: [DemoDecorStoreFaqComponent],
  imports: [
    CommonModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
