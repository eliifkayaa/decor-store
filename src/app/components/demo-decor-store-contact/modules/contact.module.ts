import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDecorStoreContactComponent } from '../demo-decor-store-contact.component';
import { ContactRoutingModule } from './contact-routing.module';


@NgModule({
  declarations: [DemoDecorStoreContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
