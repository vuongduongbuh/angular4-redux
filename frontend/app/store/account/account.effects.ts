import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Store } from "@ngrx/store";
import * as fromRoot from "../index";
import { Observable } from 'rxjs/Rx'
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { HttpService } from '../../services/http.service';
import * as account from "./account.actions";

@Injectable()
export class AccountEffects {
    page: any;
    constructor(
        private _actions: Actions,
        private httpService: HttpService
    ) {

    }

    //Login
    @Effect() 
    login$ = this._actions.ofType(account.REGISTER)
        .switchMap((action) => {
            return this.httpService.postAnonymous('customers', { email: "vd@mailinator.com", password: "123456" })
                .map((token) => {
                    sessionStorage.setItem("token", token.json());
                    return new account.RegisterSuccess(token.json());
                })
        }).catch((error) => {
            return Observable.of(new account.RegisterFailed());
        });
}
