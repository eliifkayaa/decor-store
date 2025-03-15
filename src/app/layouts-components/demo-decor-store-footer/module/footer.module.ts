import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDecorStoreFooterComponent } from '../demo-decor-store-footer.component';


@NgModule({
  declarations: [DemoDecorStoreFooterComponent],
  exports: [DemoDecorStoreFooterComponent],
  imports: [
    CommonModule,

  ]
})
export class FooterModule { }
