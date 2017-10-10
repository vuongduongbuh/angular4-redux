import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Store } from "@ngrx/store";
import * as fromRoot from "../index";
import { Observable } from 'rxjs/Rx'
import { Injectable } from "@angular/core";
import { HttpService } from '../../services/http.service';
import { CheckoutService } from './checkout.service';
import * as checkout from "./checkout.actions";
import { Actions, Effect } from "@ngrx/effects";


@Injectable()
export class CheckoutEffects {
    page: any;
    constructor(
        private _actions: Actions,
        private httpService: HttpService,
        private checkoutService: CheckoutService,
        private store: Store<fromRoot.AppState>
    ) {

    }

    // LOAD CART INFO
    @Effect() cartLoad$ = this._actions.ofType(checkout.CART_LOAD)
        .switchMap(() =>
            this.checkoutService.loadCartInfo()
                .map(cart => {
                    console.log(cart.json());
                    sessionStorage.setItem('cartInfo', JSON.stringify(cart.json()));
                    sessionStorage.setItem('cartItems', JSON.stringify(cart.json().items));
                    return new checkout.CartLoadSuccess(cart.json());
                }).catch((error) => {
                    return Observable.of(new checkout.CartLoadFailed(error));
                })
        );

    // LOAD CART ITEMS
    @Effect() cartLoadItems$ = this._actions.ofType(checkout.CART_LOAD_ITEMS)
        .switchMap(() =>
            this.checkoutService.loadCartItems()
                .map(items => {
                    sessionStorage.setItem('cartItems', JSON.stringify(items.json()));
                    return new checkout.CartLoadItemsSuccess(items.json());
                }).catch((error) => {
                    return Observable.of(new checkout.CartLoadItemsFailed(error));
                })
        );
    
    // LOAD CART SHIPPING RULE
    @Effect() cartLoadShippingRule$ = this._actions.ofType(checkout.CART_LOAD_SHIPPING_RULE)
        .switchMap((action) =>
            this.checkoutService.loadCartShippingRule(action.payload)
                .map(rules => {
                    console.log(rules.json());
                    return new checkout.CartLoadShippingRuleSuccess(rules.json());
                }).catch((error) => {
                    return Observable.of(new checkout.CartLoadShippingRuleFailed(error));
                })
        );
    
    // CREATE EMPTY CART
    @Effect() cartCreate$ = this._actions.ofType(checkout.CART_CREATE)
        .switchMap((action: any) =>
            this.checkoutService.createCart()
                .map(cart => {
                    console.log(cart.json());
                    sessionStorage.setItem('cartId', cart.json());
                    return new checkout.CartCreateSuccess(cart.json());
                }).catch((error) => {
                    return Observable.of(new checkout.CartCreateFailed(error));
                })
        );

    // ADD ITEMS TO CART
    @Effect() cartAddItems$ = this._actions.ofType(checkout.CART_ADD_ITEMS)
        .switchMap((action: any) =>
            this.checkoutService.addItemToCart(action.payload)
                .map(item => {
                    let parsedItem = item.json();
                    parsedItem.cartId = action.payload.cartId;
                    return new checkout.CartAddItemsSuccess(parsedItem);
                }).catch((error, respose) => {
                    return Observable.of(new checkout.CartAddItemsFailed(error));
                })
        );

    // CART UPDATE SHIPPING INFO
    @Effect() updateCartShippingInfo$ = this._actions.ofType(checkout.CART_UPDATE_SHIPPING_INFO)
        .switchMap((action) => 
            this.checkoutService.updateShippingInfo(action.payload)
                .map(item => {
                    return new checkout.CartUpdateShippingInfoSuccess(item);
                }).catch((error, respose) => {
                    return Observable.of(new checkout.CartUpdateShippingInfoFailed(error));
                })
        );

    //UPDATE CART
    @Effect() updateCart$ = this._actions.ofType(checkout.CART_UPDATE)
        .switchMap((action: any): Observable<{}> => {
            return new Observable<{}>(() => {
                if (action.nextStep) {
                    new checkout.CartUpdateSuccess(action);
                }
            })
        }).catch((error) => {
            return Observable.of(new checkout.CartUpdateFailed(error));
        });


}
