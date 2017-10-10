import { Component, Input } from '@angular/core';
import { Store, Dispatcher } from "@ngrx/store";
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import * as fromRoot from '../../../../store/index';
import * as products from '../../../../store/products/products.actions';
@Component({
  selector: 'lt-products-pagination',
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.less']
})
export class LtProductsPaginationComponent {

  pages$: Observable<any>;
  filter$: Observable<any>;
  isLoading$: Observable<any>;
  currentPage: any;
  currentPageSize: 40;
  constructor(private store: Store<fromRoot.AppState>, private activatedRoute: ActivatedRoute, private dispatcher: Dispatcher) {
    this.pages$ = this.store.select(fromRoot.productsGetPages);
    this.filter$ = this.store.select(fromRoot.productsGetFilter);
    this.isLoading$ = this.store.select(fromRoot.productsGetLoadingState);
    this._registerActionsListening();
  }

  _registerActionsListening() {
    //When products are loaded successfully
    this.dispatcher.filter(action => action.type === products.LOAD_BY_CATEGORY_SUCCESS)
      .subscribe((dispatcher) => {

        this.store.select(fromRoot.productsGetFilter)
          .subscribe((filter) => {
            console.log(filter);
            this.currentPage = filter.page;
            this.currentPageSize = filter.pageSize;
          })
      })
  }

  selectPage(page) {
    let actionPayload = {
      categoryId: this.activatedRoute.params['value'].id,
      filter: {
        page: page,
        pageSize: this.currentPageSize
      }
    }

    console.log(actionPayload);

    this.store.dispatch(new products.LoadByCategory(actionPayload));
  }

  selectPageSize(size) {
    console.log(size);
    let actionPayload = {
      categoryId: this.activatedRoute.params['value'].id,
      filter: {
        page: 1,
        pageSize: size
      }
    }

    console.log(actionPayload);

    this.store.dispatch(new products.LoadByCategory(actionPayload));
  }
}