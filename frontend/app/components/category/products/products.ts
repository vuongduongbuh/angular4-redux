import { Component, Input } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';
import * as fromRoot from '../../../store/index';
import * as products from '../../../store/products/products.actions';

@Component({
  selector: 'lt-products',
  templateUrl: './products.html',
  styleUrls: ['./products.less']
})
export class LtProductsComponent {
  products$: Observable<any>;
  productsCount$: Observable<any>;
  productsIsLoading$: Observable<any>;
  constructor(private store: Store<fromRoot.AppState>, private activatedRoute: ActivatedRoute) {
    this.products$ = this.store.select(fromRoot.productsGetEntities);
    this.productsCount$ = this.store.select(fromRoot.productsGetCount);
    this.productsIsLoading$ = this.store.select(fromRoot.productsGetLoadingState);

    let actionPayload = {
      categoryId: this.activatedRoute.params['value'].id,
      filter: {
        page: 1,
        pageSize: 40
      }
    }

    this.store.dispatch(new products.LoadByCategory(actionPayload));
  }
}
