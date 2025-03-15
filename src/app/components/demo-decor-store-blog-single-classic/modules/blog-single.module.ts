import { NgModule } from '@angular/core';
import { DemoDecorStoreBlogSingleClassicComponent } from '../demo-decor-store-blog-single-classic.component';
import { BlogSingleRoutingModule } from './blog-single-routing.module';
import { SharedModule } from '../../../module/shared/shared.module';


@NgModule({
  declarations: [DemoDecorStoreBlogSingleClassicComponent],
  imports: [
    SharedModule,
    BlogSingleRoutingModule
  ]
})
export class BlogSingleModule { }
