import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Store } from "@ngrx/store";
import * as fromRoot from "../index";
import { Observable } from 'rxjs/Rx'
import { Injectable } from "@angular/core";
import { HttpService } from '../../services/http.service';
import * as common from "./common.actions";
import { Actions, Effect } from "@ngrx/effects";

@Injectable()
export class CommonEffects {
  page: any;
  constructor(
    private _actions: Actions,
    private httpService: HttpService
  ) {
  }

  @Effect() loadCities$ = this._actions.ofType(common.LOAD_CITIES)
    .switchMap((action) => this.httpService.getAnonymous("customer/address?type=city&from=VN")
      .map(cities => {
        return new common.LoadCitiesSuccess(cities.json());
      })
    ).catch((error) => {
      return Observable.of(new common.LoadCitiesFailed(error));
    });

  @Effect() loadDistricts$ = this._actions.ofType(common.LOAD_DISTRICTS)
    .switchMap((action) => this.httpService.getAnonymous("customer/address?type=district&from=" + action.payload)
      .map(districts => {
        return new common.LoadDistrictsSuccess(districts.json());
      })
    ).catch((error) => {
      return Observable.of(new common.LoadDistrictsFailed(error));
    });

  @Effect() loadWards$ = this._actions.ofType(common.LOAD_WARDS)
    .switchMap((action) => this.httpService.getAnonymous("customer/address?type=ward&from=" + action.payload)
      .map(wards => {
        return new common.LoadWardsSuccess(wards.json());
      })
    ).catch((error) => {
      return Observable.of(new common.LoadWardsFailed(error));
    });
}
