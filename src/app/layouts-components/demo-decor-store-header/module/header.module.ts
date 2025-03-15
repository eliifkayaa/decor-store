import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDecorStoreHeaderComponent } from '../demo-decor-store-header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DemoDecorStoreHeaderComponent],
  exports: [DemoDecorStoreHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HeaderModule { }
