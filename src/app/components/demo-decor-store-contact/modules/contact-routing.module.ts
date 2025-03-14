
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDecorStoreContactComponent } from '../demo-decor-store-contact.component';


const routes: Routes = [{ path: '', component: DemoDecorStoreContactComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
