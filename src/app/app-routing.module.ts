import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./components/demo-decor-store/modules/home.module').then(m => m.HomeModule)},
  {path: 'about', loadChildren: () => import('./components/demo-decor-store-about/modules/about.module').then(m => m.AboutModule)},
  {path: 'account', loadChildren: () => import('./components/demo-decor-store-account/modules/account.module').then(m => m.AccountModule)},
  {path: 'blog', loadChildren: () => import('./components/demo-decor-store-blog/modules/blog.module').then(m => m.BlogModule)},
  {path: 'blog-single', loadChildren: () => import('./components/demo-decor-store-blog-single-classic/modules/blog-single.module').then(m => m.BlogSingleModule)},
  {path: 'cart', loadChildren: () => import('./components/demo-decor-store-blog/modules/blog.module').then(m => m.BlogModule)},
  {path: 'checkout', loadChildren: () => import('./components/demo-decor-store-checkout/modules/checkout.module').then(m => m.CheckoutModule)},
  {path: 'collections', loadChildren: () => import('./components/demo-decor-store-collections/modules/collections.module').then(m => m.CollectionsModule)},
  {path: 'contact', loadChildren: () => import('./components/demo-decor-store-contact/modules/contact.module').then(m => m.ContactModule)},
  {path: 'faq', loadChildren: () => import('./components/demo-decor-store-faq/modules/faq.module').then(m => m.FaqModule)},
  {path: 'no-sidebar', loadChildren: () => import('./components/demo-decor-store-no-sidebar/modules/no-sidebar.module').then(m => m.NoSidebarModule)},
  {path: 'right-sidebar', loadChildren: () => import('./components/demo-decor-store-right-sidebar/modules/right-sidebar.module').then(m => m.RightSidebarModule)},
  {path: 'product', loadChildren: () => import('./components/demo-decor-store-single-product/modules/single-product.module').then(m => m.SingleProductModule)},
  {path: 'wishlist', loadChildren: () => import('./components/demo-decor-store-wishlist/modules/wishlist.module').then(m => m.WishlistModule)},
  {path: 'shop', loadChildren: () => import('./components/demo26-shop/modules/shop.module').then(m => m.ShopModule)},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
