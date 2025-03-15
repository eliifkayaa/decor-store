import { NgModule } from '@angular/core';
import { DemoDecorStoreCollectionsComponent } from '../demo-decor-store-collections.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { SharedModule } from '../../../module/shared/shared.module';


@NgModule({
  declarations: [DemoDecorStoreCollectionsComponent],
  imports: [
    SharedModule,
    CollectionsRoutingModule
  ]
})
export class CollectionsModule { }
