import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DemoDecorStoreComponent } from '../demo-decor-store.component';

@NgModule({
  declarations: [DemoDecorStoreComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
