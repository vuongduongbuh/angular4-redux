import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { SlimScrollModule } from 'ng2-slimscroll';
import { NouisliderModule } from 'ng2-nouislider/src/nouislider';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { OwlModule } from 'ngx-owl-carousel';

//Import redux
import { reducer } from './store/index';

//Import effects/services
import { CommonEffects } from './store/common/common.effects';
import { AuthEffects } from './store/auth/auth.effects';
import { ProductEffects } from './store/products/products.effects';
import { CategoryEffects } from './store/categories/categories.effects';
import { CheckoutEffects } from './store/checkout/checkout.effects';

//Import services
import { HttpService } from './services/http.service';
import { CheckoutService } from './store/checkout/checkout.service';
import { ProductsService } from './store/products/products.service';

//Import layouts components
import { AppComponent } from './app.component';
import { AppHeader } from './layout/header/header';
import { AppFooter } from './layout/footer/footer';
import { AppHeaderMainNav } from './layout/header/mainnav/mainnav';
import { AppHeaderFixtop } from './layout/header/fixtop/fixtop';
import { AppHeaderSearch } from './layout/header/search/search';
import { AppHeaderUserMenu } from './layout/header/usermenu/usermenu';
import { AppHeaderMegaMenu } from './layout/header/megamenu/megamenu';
import { AppContent } from './layout/content/content';
import { AppLoader } from './layout/loader/loader';

//Import custom components
import { LtPromotion } from './components/promotion/promotion';
import { LtSeenProduct } from './components/seen-product/seen-product';
import { LtBreadCumbComponent } from './components/breadcumb/breadcumb';
import { LtSidebarComponent } from './components/category/sidebar/sidebar';
import { LtSidebarTreeComponent } from './components/category/sidebar/tree/tree';
import { LtSidebarFilterComponent } from './components/category/sidebar/filter/filter';
import { LtProductsComponent } from './components/category/products/products';
import { LtProductsRecommend } from './components/category/recommend/recommend';
import { LtProductsPaginationComponent } from './components/category/products/pagination/pagination';
import { LtProductsListComponent } from './components/category/products/list/list';
import { LtBannerComponent } from './components/category/banner/banner';
import { LtCheckoutShippingComponent } from './components/checkout/shipping/shipping';
import { LtCheckoutShippingFormComponent } from './components/checkout/shipping/form/form';
import { LtCheckoutCartComponent } from './components/checkout/cart/cart';
import { LtCheckoutDeliverComponent } from './components/checkout/deliver/deliver';
import { LtCheckoutSuccessComponent } from './components/checkout/success/success';
import { LtCheckoutPaymentComponent } from './components/checkout/payment/payment';
import { LtCheckoutPaymentAddressComponent } from './components/checkout/payment/address/address';
import { LtCheckoutPaymentByCashComponent } from './components/checkout/payment/cash/cash';
import { LtCheckoutPaymentByCardComponent } from './components/checkout/payment/card/card';
import { LtCheckoutPaymentByAtmComponent } from './components/checkout/payment/atm/atm';
import { LtCheckoutPaymentByInstallmentComponent } from './components/checkout/payment/installment/installment';
import { LtCheckoutOrderComponent } from './components/checkout/order/order';
import { LtProductSuggest } from './components/product/suggest/suggest';
import { LtProductDetail } from './components/product/detail/detail';
import { LtProductInfo } from './components/product/info/info';

//Import modals
import { LoginModal } from './modals/login/login';
import { RegisterModal } from './modals/register/register';
import { ConfirmModal } from './modals/confirm/confirm';

//Import modules
import { LotteCategory } from './modules/category/category';
import { LotteCheckout } from './modules/checkout/checkout';
import { LotteProduct } from './modules/product/product';


//Define effects
const AppEffectsRun = [
  EffectsModule.run(CommonEffects),
  EffectsModule.run(AuthEffects),
  EffectsModule.run(ProductEffects),
  EffectsModule.run(CategoryEffects),
  EffectsModule.run(CheckoutEffects)
];

//Define translate factory
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

//Define routes
const routes: Routes = [
  {
    path: 'lottevn/category/:id',
    component: LotteCategory,
  },
  {
    path: 'lottedepartment/category/:id',
    component: LotteCategory
  },
  {
    path: 'lottemart/category/:id',
    component: LotteCategory
  },
  {
    path: 'lottedatviet/category/:id',
    component: LotteCategory
  },
  {
    path: 'checkout',
    component: LotteCheckout
  },
  {
    path: 'lottevn/product/:id',
    component: LotteProduct
  },
  {
    path: 'lottedepartment/product/:id',
    component: LotteProduct
  },
  {
    path: 'lottemart/product/:id',
    component: LotteProduct
  },
  {
    path: 'lottedatviet/product/:id',
    component: LotteProduct
  }
];

@NgModule({
  declarations: [
    //Import layouts components
    AppComponent,
    AppHeader,
    AppFooter,
    AppHeaderMainNav,
    AppHeaderSearch,
    AppHeaderUserMenu,
    AppHeaderMegaMenu,
    AppHeaderFixtop,
    AppContent,
    AppLoader,

    //Import custom components
    LtPromotion,
    LtSeenProduct,
    LtBreadCumbComponent,
    LtSidebarComponent,
    LtSidebarTreeComponent,
    LtSidebarFilterComponent,
    LtProductsComponent,
    LtProductsRecommend,
    LtProductsPaginationComponent,
    LtProductsListComponent,
    LtBannerComponent,
    LtCheckoutCartComponent,
    LtCheckoutShippingComponent,
    LtCheckoutShippingFormComponent,
    LtCheckoutDeliverComponent,
    LtCheckoutSuccessComponent,
    LtCheckoutPaymentComponent,
    LtCheckoutPaymentAddressComponent,
    LtCheckoutPaymentByCashComponent,
    LtCheckoutPaymentByCardComponent,
    LtCheckoutPaymentByAtmComponent,
    LtCheckoutPaymentByInstallmentComponent,
    LtCheckoutOrderComponent,
    LtProductSuggest,
    LtProductDetail,
    LtProductInfo,

    //Import modals
    LoginModal,
    RegisterModal,
    ConfirmModal,

    //Import modules
    LotteCategory,
    LotteCheckout,
    LotteProduct
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    SlimScrollModule,
    NouisliderModule,
    ...AppEffectsRun,
    StoreModule.provideStore(reducer),
    OwlModule,
    BootstrapModalModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  entryComponents: [
    //Import modals
    LoginModal,
    RegisterModal,
    ConfirmModal
  ],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, HttpService, CheckoutService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
