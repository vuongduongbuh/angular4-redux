import { type } from "../utils";
import { Action } from "@ngrx/store";

/*
 Because the Categories collection is asynchronous, there need to be actions to handle
 each of the stages of the request.
 */
export const REGISTER = '[REGISTER] register';
export const REGISTER_SUCCESS = '[REGISTER] successfully registered';
export const REGISTER_FAILED = '[REGISTER] failed to register';


export class Register implements Action {
    readonly type = REGISTER;
    constructor(public payload: any) { }
}

export class RegisterFailed implements Action {
    readonly type = REGISTER_FAILED;

    constructor() {
    }
}
export class RegisterSuccess implements Action {
    readonly type = REGISTER_SUCCESS;
    constructor(public payload: any) {
    }
}

export type AccountActions =
    Register | RegisterFailed | RegisterSuccess

