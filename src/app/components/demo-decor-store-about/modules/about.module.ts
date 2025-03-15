import { NgModule } from '@angular/core';
import { DemoDecorStoreAboutComponent } from '../demo-decor-store-about.component';
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../../../module/shared/shared.module';


@NgModule({
  declarations: [DemoDecorStoreAboutComponent],
  imports: [
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
