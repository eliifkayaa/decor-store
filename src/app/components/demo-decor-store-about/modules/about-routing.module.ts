
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDecorStoreAboutComponent } from '../demo-decor-store-about.component';

const routes: Routes = [{ path: '', component: DemoDecorStoreAboutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
