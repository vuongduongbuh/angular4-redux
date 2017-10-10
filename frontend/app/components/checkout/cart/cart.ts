import { Component, Input } from '@angular/core';
import { Store, Dispatcher } from "@ngrx/store";
import { Observable } from "rxjs";
import { DialogService } from "ng2-bootstrap-modal";
import * as _ from 'lodash';
import * as fromRoot from '../../../store/index';
import * as checkout from '../../../store/checkout/checkout.actions';
import * as auth from '../../../store/auth/auth.actions';
import * as common from '../../../store/common/common.actions';

import { LoginModal } from '../../../modals/login/login';
@Component({
  selector: 'lt-checkout-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.less']
})

export class LtCheckoutCartComponent {
  @Input('isLoggedIn')
  isLoggedIn: any;

  cartItems$: Observable<any>;
  cartInfo$: Observable<any>;
  cartItemsCount$: Observable<any>;
  commonCities$: Observable<any>;
  commonDistricts$: Observable<any>;
  cartShippingInfo$: Observable<any>;
  assetUrl: any;
  regionId: any;
  districtId: any;
  userInfo: any;
  constructor(private store: Store<fromRoot.AppState>, private dialogService: DialogService, private dispatcher: Dispatcher) {
    this.cartItemsCount$ = this.store.select(fromRoot.checkoutGetCartItemsCount);
    this.cartItems$ = this.store.select(fromRoot.checkoutGetCartItems);
    this.cartInfo$ = this.store.select(fromRoot.checkoutGetCartInfo);
    this.cartShippingInfo$ = this.store.select(fromRoot.checkoutGetShippingInfo);
    this.commonCities$ = this.store.select(fromRoot.commonGetCities);
    this.commonDistricts$ = this.store.select(fromRoot.commonGetDistricts);
    
    //Check if user is logged in
    this.store.select(fromRoot.authGetLoggedInState);
    this.assetUrl = sessionStorage.getItem('assetUrl');
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    
    this.dispatcher.filter((action) => action.type === auth.LOGIN_SUCCESS)
      .subscribe(() => {
        this.store.dispatch(new checkout.UpdateCurrentStep(2));
      });
  }

  selectArea(regionId, districtId) {
    console.log(districtId);
    if(districtId) {
      this.store.dispatch(new checkout.CartLoadShippingRule(districtId));
      return;
    }
    this.store.dispatch(new common.LoadDistricts(regionId));
  }

  goToNextStep() {
    if (!this.isLoggedIn) {
      let disposable = this.dialogService.addDialog(LoginModal, {
        title: '',
        message: '',
        isNotLoggedIn: true
      });
    } else {
      this.store.dispatch(new checkout.UpdateCurrentStep(2));
    }
  }

  updateCart(item) {
    console.log(item);
  }

  changeItemInCart(flag, item) {
    if (!item.new_qty) {
      item.new_qty = _.clone(item.qty);
    }

    if (flag === '+') {
      item.new_qty++;
      return;
    }

    item.new_qty--;

  }
}