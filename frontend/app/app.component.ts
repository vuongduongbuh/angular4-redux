import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';
import { HttpService } from './services/http.service';
import {TranslateService} from 'ng2-translate';
import { Store, Dispatcher } from "@ngrx/store";
import { Observable } from "rxjs";

import * as auth from './store/auth/auth.actions';
import * as checkout from './store/checkout/checkout.actions';
import * as fromRoot from './store/index';

const logoLottevn = "https://d1710i1dsqwesz.cloudfront.net/media/logo/default/logo-lotte_1_1.png";
const logoDepartment = "https://d1710i1dsqwesz.cloudfront.net/media/logo/default/logo-department_3_1.png";
const logoLottemart = "https://d1710i1dsqwesz.cloudfront.net/media/logo/default/logo-lotte-mart_3_1.png";
const logoDatviet = "https://d1710i1dsqwesz.cloudfront.net/media/logo/default/logo-homeshopping_2_1.png";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})


export class AppComponent {
  logoImg = logoLottevn;
  lotteVnCss: any;
  isFixedHeaderShown: Boolean;
  isCheckOutPage: Boolean;
  isNavbarShown: Boolean;

  isLoggedIn$: Observable<any>;
  cartInfo$: Observable<any>;
  cartItems$: Observable<any>;
  constructor(private httpService: HttpService, private router: Router, private store: Store<fromRoot.AppState>, private translateService: TranslateService) {
    console.log(translateService);
    translateService.setDefaultLang('vi');
    translateService.use('vi');

    this._registerRouteChangeEvent();
    this._reloadStore();
    let cartId = sessionStorage.getItem('cartId');
    if (cartId) {
      this.store.dispatch(new checkout.CartLoad());
    }
    this.isLoggedIn$ = this.store.select(fromRoot.authGetLoggedInState);
    this.cartInfo$ = this.store.select(fromRoot.checkoutGetCartInfo);
    this.cartItems$ = this.store.select(fromRoot.checkoutGetCartItems);
  }

  _reloadStore() {
    sessionStorage.setItem("assetUrl", "https://staging.lotte.vn/media/catalog/product");
    this.store.dispatch(new auth.RefreshPage());
    this.store.dispatch(new checkout.CartRefresh());
  }

  @HostListener("window:scroll", [])
  onWindowScroll(ev) {
    let header = document.querySelector('app-header-main-nav');
    if (header) {
      if (window.pageYOffset >= header['offsetTop']) {
        this.isFixedHeaderShown = true;
      } else {
        this.isFixedHeaderShown = false;
      }
    }
  }

  _registerRouteChangeEvent() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this._registerCheckOutPageEvents(event);
        this._registerChangeNavbarEvents(event);
      }
    })
  }

  _registerCheckOutPageEvents(event) {
    if (event.url.startsWith('/checkout')) {
      this.isCheckOutPage = true;
    } else {
      this.isCheckOutPage = false;
    }
  }

  _registerChangeNavbarEvents(event) {
    let body = document.body;
    let removeCurrentMenu = () => {
      let tabMenu = document.querySelectorAll('.tab-menu li');
      _.each(tabMenu, (menu) => {
        menu.classList.remove('current');
      })
    }
    if (event.url.startsWith('/lottevn') || event.url === '/') {
      body.className = "cms-home cms-index-index page-layout-1column page-with-filter page-layout-2columns-left page-products catalog-category-view";

      removeCurrentMenu();
      let lottevnMenu = document.querySelector('.lotte-menu');
      if (lottevnMenu) {
        lottevnMenu.classList.add('current');
      }
      this.logoImg = logoLottevn;
    }

    if (event.url.startsWith('/lottedepartment')) {
      removeCurrentMenu();
      let lotteDepartmentMenu = document.querySelector('.depart-menu');
      if (lotteDepartmentMenu) {
        lotteDepartmentMenu.classList.add('current');
      }
      body.className = "department-theme cms-department-store cms-page-view page-layout-lotte-department-store-layout page-with-filter page-layout-2columns-left page-products catalog-category-view";
      this.logoImg = logoDepartment;
    }

    if (event.url.startsWith('/lottemart')) {
      removeCurrentMenu();
      let lottemartMenu = document.querySelector('.lotte-mart');
      if (lottemartMenu) {
        lottemartMenu.classList.add('current');
      }
      body.className = "lottemart-theme cms-lotte-mart cms-page-view page-layout-lotte-mart-layout page-with-filter page-layout-2columns-left page-products catalog-category-view";
      this.logoImg = logoLottemart;
    }

    if (event.url.startsWith('/lottedatviet')) {
      removeCurrentMenu();
      let lottedatvietMenu = document.querySelector('.lotte-datviet');
      if (lottedatvietMenu) {
        lottedatvietMenu.classList.add('current');
      }

      body.className = "datviet-theme cms-home-shopping cms-page-view page-layout-home-shopping-layout page-with-filter page-layout-2columns-left page-products catalog-category-view";
      this.logoImg = logoDatviet;
    }
  }
}
