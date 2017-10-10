import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Store } from "@ngrx/store";
import * as fromRoot from "../index";
import { Observable } from 'rxjs/Rx'
import { Injectable } from "@angular/core";
import { HttpService } from '../../services/http.service';
import * as checkout from "./checkout.actions";

@Injectable()
export class CheckoutService {
    page: any;
    constructor(
        private httpService: HttpService,
        private store: Store<fromRoot.AppState>
    ) {

    }

    loadCartInfo() {
        let token = sessionStorage.getItem('token');
        let cartId = sessionStorage.getItem('cartId');
        if (token) {
            return this.httpService.get("carts/mine/totals");
        } else {
            return this.httpService.getAnonymous("guest-carts/" + cartId + "/totals")
        }
    }

    loadCartShippingRule(regionId) {
        let token = sessionStorage.getItem('token');
        let cartId = sessionStorage.getItem('cartId');
        if (token) {
            return this.httpService.get("carts/mine/totals");
        } else {
            return this.httpService.getAnonymous("lotte_custom/?name=shipping_cart_rule&cart_id=" + cartId + "&region=" + regionId)
        }
    }

    createCart() {
        let token = sessionStorage.getItem('token');
        if (token) {
            return this.httpService.post("carts/mine", {})
        } else {
            return this.httpService.postAnonymous("guest-carts", {})
        }
    }

    loadCartItems() {
        let token = sessionStorage.getItem('token');
        let cartId = sessionStorage.getItem('cartId');
        if (token) {
            return this.httpService.get('carts/mine/items')
        } else {
            return this.httpService.getAnonymous('guest-carts/' + cartId + '/items')
        }
    }

    addItemToCart(item: any) {
        let token = sessionStorage.getItem('token');
        let cartId = sessionStorage.getItem('cartId');

        if (token) {
            return this.httpService.post('carts/mine/items', item)
        } else {
            return this.httpService.postAnonymous('guest-carts/' + cartId + '/items', item)
        }
    }

    updateCartItem(item) {
        let token = sessionStorage.getItem('token');
        let cartId = sessionStorage.getItem('cartId');
        if (token) {
            return this.httpService.post('carts/mine/items/' + item.id, item)
        } else {
            return this.httpService.postAnonymous('guest-carts/' + cartId + '/items/' + item.id, item)
        }
    }

    updateShippingInfo(info) {
        let token = sessionStorage.getItem('token');
        let cartId = sessionStorage.getItem('cartId');
        if (token) {
            return this.httpService.post('carts/mine/shipping-information', info)
        } else {
            return this.httpService.postAnonymous('guest-carts/' + cartId + '/shipping-information', info)
        }
    }
} 