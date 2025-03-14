import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDecorStoreNoSidebarComponent } from '../demo-decor-store-no-sidebar.component';
import { NoSidebarRoutingModule } from './no-sidebar-routing.module';


@NgModule({
  declarations: [DemoDecorStoreNoSidebarComponent],
  imports: [
    CommonModule,
    NoSidebarRoutingModule
  ]
})
export class NoSidebarModule { }
