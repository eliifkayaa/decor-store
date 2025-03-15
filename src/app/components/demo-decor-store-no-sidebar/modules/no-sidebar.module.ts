import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDecorStoreNoSidebarComponent } from '../demo-decor-store-no-sidebar.component';
import { NoSidebarRoutingModule } from './no-sidebar-routing.module';
import { SharedModule } from '../../../module/shared/shared.module';


@NgModule({
  declarations: [DemoDecorStoreNoSidebarComponent],
  imports: [
    SharedModule,
    NoSidebarRoutingModule
  ]
})
export class NoSidebarModule { }
