import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Store } from "@ngrx/store";
import * as fromRoot from "../index";
import { Observable } from 'rxjs/Rx'
import { Injectable } from "@angular/core";
import { HttpService } from '../../services/http.service';
import { ProductsService } from './products.service';
import { Actions, Effect } from "@ngrx/effects";
import * as products from './products.actions';

@Injectable()
export class ProductEffects {
  page: any;
  constructor(
    private _actions: Actions,
    private httpService: HttpService,
    private productsService: ProductsService,
    private store: Store<fromRoot.AppState>
  ) {
    
  }

  @Effect()
  loadProductsByCategory$ = this._actions.ofType(products.LOAD_BY_CATEGORY)
    .switchMap((action) => this.productsService.getProductsByCategory(action.payload.categoryId, action.payload.filter)
      .map(data => {
        console.log(data.json());
        return new products.LoadByCategorySuccess(data.json());
      })
    ).catch((error) => {
      return Observable.of(new products.LoadByCategoryFailed(error));
    });
}
