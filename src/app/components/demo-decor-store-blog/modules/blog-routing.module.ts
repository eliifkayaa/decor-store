
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDecorStoreBlogComponent } from '../demo-decor-store-blog.component';

const routes: Routes = [{ path: '', component: DemoDecorStoreBlogComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
