
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDecorStoreBlogSingleClassicComponent } from '../demo-decor-store-blog-single-classic.component';

const routes: Routes = [{ path: '', component: DemoDecorStoreBlogSingleClassicComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogSingleRoutingModule { }
