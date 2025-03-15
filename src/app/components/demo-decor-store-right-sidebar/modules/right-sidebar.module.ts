import { NgModule } from '@angular/core';
import { DemoDecorStoreRightSidebarComponent } from '../demo-decor-store-right-sidebar.component';
import { RightSidebarRoutingModule } from './right-sidebar-routing.module';
import { SharedModule } from '../../../module/shared/shared.module';


@NgModule({
  declarations: [DemoDecorStoreRightSidebarComponent],
  imports: [
    SharedModule,
    RightSidebarRoutingModule
  ]
})
export class RightSidebarModule { }
