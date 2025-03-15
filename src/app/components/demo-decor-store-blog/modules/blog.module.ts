import { NgModule } from '@angular/core';
import { DemoDecorStoreBlogComponent } from '../demo-decor-store-blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../../../module/shared/shared.module';


@NgModule({
  declarations: [DemoDecorStoreBlogComponent],
  imports: [
    SharedModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
