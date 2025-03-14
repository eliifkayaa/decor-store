
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDecorStoreCollectionsComponent } from '../demo-decor-store-collections.component';

const routes: Routes = [{ path: '', component: DemoDecorStoreCollectionsComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
