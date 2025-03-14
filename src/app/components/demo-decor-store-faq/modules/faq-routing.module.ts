
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDecorStoreFaqComponent } from '../demo-decor-store-faq.component';


const routes: Routes = [{ path: '', component: DemoDecorStoreFaqComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule { }
