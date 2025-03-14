
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDecorStoreSingleProductComponent } from '../demo-decor-store-single-product.component';


const routes: Routes = [{ path: '', component: DemoDecorStoreSingleProductComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleProductRoutingModule { }
