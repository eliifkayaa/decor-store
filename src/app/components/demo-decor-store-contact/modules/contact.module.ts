import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDecorStoreContactComponent } from '../demo-decor-store-contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../../../module/shared/shared.module';


@NgModule({
  declarations: [DemoDecorStoreContactComponent],
  imports: [
    SharedModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
