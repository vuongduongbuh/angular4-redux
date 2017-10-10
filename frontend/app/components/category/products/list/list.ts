import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Store, Dispatcher } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromRoot from '../../../../store/index';
import * as checkout from '../../../../store/checkout/checkout.actions';
import * as products from '../../../../store/products/products.actions';

import * as _ from 'lodash';
@Component({
  selector: 'lt-products-list',
  templateUrl: './list.html',
  styleUrls: ['./list.less']
})
export class LtProductsListComponent {

  products$: Observable<any>;

  isLoading$: Observable<any>;

  isItemAddedToCart: Boolean;
  selectedProduct: any;
  assetUrl: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private store: Store<fromRoot.AppState>, private dispatcher: Dispatcher) {
    this.products$ = this.store.select(fromRoot.productsGetEntities);
    this.isLoading$ = this.store.select(fromRoot.productsGetLoadingState);
    this.assetUrl = sessionStorage.getItem('assetUrl');
    this.dispatcher.subscribe((action) => {
      switch (action.type) {
        case checkout.CART_CREATE_SUCCESS:
          this.selectedProduct.cartItem.quoteId = action.payload;
          this.store.dispatch(new checkout.CartAddItems(this.selectedProduct));
          break;
        case checkout.CART_ADD_ITEMS_SUCCESS:
          this.isItemAddedToCart = false;
          this.store.dispatch(new checkout.CartLoad());
          break;
        case checkout.CART_ADD_ITEMS_FAILED:
          this.isItemAddedToCart = false;
          break;
        default: break;
      }
    });
  }

  checkout(product, ev) {
    this.addToCart(product, null);
    this.router.navigate(["/checkout"]);
    ev.stopPropagation();
  }

  addToCart(product, ev) {
    if (!this.isItemAddedToCart) {
      this.isItemAddedToCart = true;
      this.selectedProduct = {
        "cartItem": {
          "sku": product.sku,
          "qty": 1
        }
      };

      let cartId = sessionStorage.getItem('cartId');
      if (cartId) {
        this.selectedProduct.cartItem.quoteId = cartId;
        this.store.dispatch(new checkout.CartAddItems(this.selectedProduct));
      } else {
        this.store.dispatch(new checkout.CartCreate());
      }
    }

    if(ev) {
      ev.stopPropagation();
    }
  }

  goProductDetail(product) {
    let currentRoute = this.activatedRoute.routeConfig.path.toString();
    let url = currentRoute.substring(0, currentRoute.indexOf('/'));
    this.router.navigate([url + "/product/" + product.id]);
  }
}