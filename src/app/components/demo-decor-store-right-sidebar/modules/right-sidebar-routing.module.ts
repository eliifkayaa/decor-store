
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDecorStoreRightSidebarComponent } from '../demo-decor-store-right-sidebar.component';


const routes: Routes = [{ path: '', component: DemoDecorStoreRightSidebarComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RightSidebarRoutingModule { }
