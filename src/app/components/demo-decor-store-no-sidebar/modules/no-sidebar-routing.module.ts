
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDecorStoreNoSidebarComponent } from '../demo-decor-store-no-sidebar.component';


const routes: Routes = [{ path: '', component: DemoDecorStoreNoSidebarComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoSidebarRoutingModule { }
