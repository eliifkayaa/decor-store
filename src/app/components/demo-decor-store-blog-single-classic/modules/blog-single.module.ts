import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDecorStoreBlogSingleClassicComponent } from '../demo-decor-store-blog-single-classic.component';
import { BlogSingleRoutingModule } from './blog-single-routing.module';


@NgModule({
  declarations: [DemoDecorStoreBlogSingleClassicComponent],
  imports: [
    CommonModule,
    BlogSingleRoutingModule
  ]
})
export class BlogSingleModule { }
