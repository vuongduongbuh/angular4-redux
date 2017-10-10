import { type } from "../utils";
import { Action } from "@ngrx/store";

/*
 Because the Categories collection is asynchronous, there need to be actions to handle
 each of the stages of the request.
 */
export const LOGIN = '[LOGIN] loging in';
export const LOGIN_SUCCESS = '[LOGIN] successfully logged in';
export const LOGIN_FAILED = '[LOGIN] failed to login';

export const LOGOUT = '[LOGOUT] Logging out';
export const LOGOUT_SUCCESS = '[LOGOUT] successfully logged out';
export const LOGOUT_FAILED = '[LOGOUT] failed to log out';

export const USER_LOAD = '[USER] User loading info';
export const USER_LOAD_SUCCESS = '[USER] successfully loaded user info';
export const USER_LOAD_FAILED = '[USER] failed to load user info';

export const REFRESH_PAGE = '[AUTH] Refresh page';


export class Login implements Action {
    readonly type = LOGIN;
    constructor(public payload: any) { }
}

export class LoginFailed implements Action {
    readonly type = LOGIN_FAILED;

    constructor() {
    }
}
export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload: any) {
    }
}

export class Logout implements Action {
    readonly type = LOGOUT;
    constructor(public payload: any) { }
}

export class LogoutFailed implements Action {
    readonly type = LOGOUT_FAILED;

    constructor(public payload: any) {
    }
}

export class LogoutSuccess implements Action {
    readonly type = LOGOUT_SUCCESS;
    constructor(public payload: any) {
    }
}

export class UserLoad implements Action {
    readonly type = USER_LOAD;
    constructor() {
    }
}

export class UserLoadFailed implements Action {
    readonly type = USER_LOAD_FAILED;
    constructor(public payload: any) {
    }
}

export class UserLoadSuccess implements Action {
    readonly type = USER_LOAD_SUCCESS;
    constructor(public payload: any) {
    }
}

export class RefreshPage implements Action {
    readonly type = REFRESH_PAGE;
}

export type AuthActions =
    Login | LoginFailed | LoginSuccess |
    Logout | LogoutFailed | LogoutSuccess |
    UserLoad | UserLoadFailed | UserLoadSuccess |
    RefreshPage

