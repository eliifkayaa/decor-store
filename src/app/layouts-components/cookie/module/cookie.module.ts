import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieComponent } from '../cookie.component';


@NgModule({
  declarations: [CookieComponent],
  exports: [CookieComponent],
  imports: [
    CommonModule,

  ]
})
export class CookieModule { }
