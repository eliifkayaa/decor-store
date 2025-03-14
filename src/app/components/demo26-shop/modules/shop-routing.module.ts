
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo26ShopComponent } from '../demo26-shop.component';


const routes: Routes = [{ path: '', component: Demo26ShopComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
