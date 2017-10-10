import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Rx'
import { Injectable } from "@angular/core";
import { HttpService } from '../../services/http.service';
import * as categories from "./categories.actions";
import { Actions, Effect } from "@ngrx/effects";
import { LoadCategoriesSuccess } from "./categories.actions";
import { LoadCategoriesFailed } from "./categories.actions";

@Injectable()
export class CategoryEffects {
  constructor(
    private _actions: Actions,
    private httpService: HttpService
  ) { }


  @Effect() loadCategories$ = this._actions.ofType(categories.LOAD)
    .switchMap((action) => this.httpService.getAnonymous("categories?rootCategoryId=" + action.payload + "&depth=2")
      .map(categories => {
        console.log(categories.json());
        // console.log(categories['_body']);
        return new LoadCategoriesSuccess(categories.json());
      })
    ).catch((error) => {
      console.log("load failed");
      return Observable.of(new LoadCategoriesFailed(error));
    });
}
