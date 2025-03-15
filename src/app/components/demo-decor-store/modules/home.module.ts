import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { DemoDecorStoreComponent } from '../demo-decor-store.component';

import { SharedModule } from '../../../module/shared/shared.module';

@NgModule({
  declarations: [DemoDecorStoreComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
