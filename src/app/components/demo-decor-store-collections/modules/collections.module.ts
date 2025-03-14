import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDecorStoreCollectionsComponent } from '../demo-decor-store-collections.component';
import { CollectionsRoutingModule } from './collections-routing.module';


@NgModule({
  declarations: [DemoDecorStoreCollectionsComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ]
})
export class CollectionsModule { }
