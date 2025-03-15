import { NgModule } from '@angular/core';
import { DemoDecorStoreFaqComponent } from '../demo-decor-store-faq.component';
import { FaqRoutingModule } from './faq-routing.module';
import { SharedModule } from '../../../module/shared/shared.module';


@NgModule({
  declarations: [DemoDecorStoreFaqComponent],
  imports: [
    SharedModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
