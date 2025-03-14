import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDecorStoreAccountComponent } from '../demo-decor-store-account.component';
import { AccountRoutingModule } from './account-routing.module';


@NgModule({
  declarations: [DemoDecorStoreAccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
