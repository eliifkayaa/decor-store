import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DemoDecorStoreAboutComponent } from './components/demo-decor-store-about/demo-decor-store-about.component';
import { DemoDecorStoreAccountComponent } from './components/demo-decor-store-account/demo-decor-store-account.component';
import { DemoDecorStoreBlogSingleClassicComponent } from './components/demo-decor-store-blog-single-classic/demo-decor-store-blog-single-classic.component';
import { DemoDecorStoreBlogComponent } from './components/demo-decor-store-blog/demo-decor-store-blog.component';
import { DemoDecorStoreCartComponent } from './components/demo-decor-store-cart/demo-decor-store-cart.component';
import { DemoDecorStoreCheckoutComponent } from './components/demo-decor-store-checkout/demo-decor-store-checkout.component';
import { DemoDecorStoreCollectionsComponent } from './components/demo-decor-store-collections/demo-decor-store-collections.component';
import { DemoDecorStoreContactComponent } from './components/demo-decor-store-contact/demo-decor-store-contact.component';
import { DemoDecorStoreFaqComponent } from './components/demo-decor-store-faq/demo-decor-store-faq.component';
import { DemoDecorStoreNoSidebarComponent } from './components/demo-decor-store-no-sidebar/demo-decor-store-no-sidebar.component';
import { DemoDecorStoreRightSidebarComponent } from './components/demo-decor-store-right-sidebar/demo-decor-store-right-sidebar.component';
import { DemoDecorStoreSingleProductComponent } from './components/demo-decor-store-single-product/demo-decor-store-single-product.component';
import { DemoDecorStoreWishlistComponent } from './components/demo-decor-store-wishlist/demo-decor-store-wishlist.component';
import { DemoDecorStoreComponent } from './components/demo-decor-store/demo-decor-store.component';
import { Demo26ShopComponent } from './components/demo26-shop/demo26-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoDecorStoreAboutComponent,
    DemoDecorStoreAccountComponent,
    DemoDecorStoreBlogSingleClassicComponent,
    DemoDecorStoreBlogComponent,
    DemoDecorStoreCartComponent,
    DemoDecorStoreCheckoutComponent,
    DemoDecorStoreCollectionsComponent,
    DemoDecorStoreContactComponent,
    DemoDecorStoreFaqComponent,
    DemoDecorStoreNoSidebarComponent,
    DemoDecorStoreRightSidebarComponent,
    DemoDecorStoreSingleProductComponent,
    DemoDecorStoreWishlistComponent,
    DemoDecorStoreComponent,
    Demo26ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
