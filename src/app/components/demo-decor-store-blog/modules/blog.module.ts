import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDecorStoreBlogComponent } from '../demo-decor-store-blog.component';
import { BlogRoutingModule } from './blog-routing.module';


@NgModule({
  declarations: [DemoDecorStoreBlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
