import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Store } from "@ngrx/store";
import * as fromRoot from "../index";
import { Observable } from 'rxjs/Rx'
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { HttpService } from '../../services/http.service';
import * as auth from "./auth.actions";

@Injectable()
export class AuthEffects {
    page: any;
    constructor(
        private _actions: Actions,
        private httpService: HttpService
    ) {

    }

    //Login
    @Effect() 
    login$ = this._actions.ofType(auth.LOGIN)
        .switchMap((action) => {
            return this.httpService.postAnonymous('integration/customer/token', { username: "vd@mailinator.com", password: "123456" })
                .map((token) => {
                    sessionStorage.setItem("token", token.json());
                    return new auth.LoginSuccess(token.json());
                })
        }).catch((error) => {
            return Observable.of(new auth.LoginFailed());
        });
    
    //Logout
    @Effect() 
    logout$ = this._actions.ofType(auth.LOGOUT)
        .switchMap((action) => {
            return this.httpService.postAnonymous('integration/customer/token', { username: "vd@mailinator.com", password: "123456" })
                .map((token) => {
                    sessionStorage.clear();
                    return new auth.LogoutSuccess(token.json());
                })
        }).catch((error) => {
            return Observable.of(new auth.LogoutFailed(error));
        });
    
    @Effect() 
    getUserInfo = this._actions.ofType(auth.USER_LOAD)
        .switchMap((action) => {
            return this.httpService.get('customers/me')
                .map((info) => {
                    console.log(info.json());
                    sessionStorage.setItem('userInfo', JSON.stringify(info.json()));
                    return new auth.UserLoadSuccess(info.json());
                })
        }).catch((error) => {
            return Observable.of(new auth.UserLoadFailed(error));
        });
}
