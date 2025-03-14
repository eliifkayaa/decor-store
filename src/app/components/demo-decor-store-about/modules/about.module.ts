import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDecorStoreAboutComponent } from '../demo-decor-store-about.component';
import { AboutRoutingModule } from './about-routing.module';


@NgModule({
  declarations: [DemoDecorStoreAboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
