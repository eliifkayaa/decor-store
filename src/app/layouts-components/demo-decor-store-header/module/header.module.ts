import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDecorStoreHeaderComponent } from '../demo-decor-store-header.component';


@NgModule({
  declarations: [DemoDecorStoreHeaderComponent],
  exports: [DemoDecorStoreHeaderComponent],
  imports: [
    CommonModule,

  ]
})
export class HeaderModule { }
