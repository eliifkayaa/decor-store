import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieModule } from '../../layouts-components/cookie/module/cookie.module';
import { FooterModule } from '../../layouts-components/demo-decor-store-footer/module/footer.module';
import { HeaderModule } from '../../layouts-components/demo-decor-store-header/module/header.module';
import { ScrollModule } from '../../layouts-components/scroll-progress/module/scroll.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CookieModule,
    FooterModule,
    HeaderModule,
    ScrollModule,
  ],
  exports: [
    CommonModule,
    CookieModule,
    FooterModule,
    HeaderModule,
    ScrollModule,
  ]
})
export class SharedModule { }
