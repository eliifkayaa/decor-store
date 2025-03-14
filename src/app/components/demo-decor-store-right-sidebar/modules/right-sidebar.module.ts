import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDecorStoreRightSidebarComponent } from '../demo-decor-store-right-sidebar.component';
import { RightSidebarRoutingModule } from './right-sidebar-routing.module';


@NgModule({
  declarations: [DemoDecorStoreRightSidebarComponent],
  imports: [
    CommonModule,
    RightSidebarRoutingModule
  ]
})
export class RightSidebarModule { }
