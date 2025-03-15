import { NgModule } from '@angular/core';
import { DemoDecorStoreAccountComponent } from '../demo-decor-store-account.component';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../../../module/shared/shared.module';


@NgModule({
  declarations: [DemoDecorStoreAccountComponent],
  imports: [
    SharedModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
