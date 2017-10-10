import { type } from "../utils";
import { Action } from "@ngrx/store";

/*
 Because the Products collection is asynchronous, there need to be actions to handle
 each of the stages of the request.
 */
export const LOAD_BY_CATEGORY = '[Products] load products';
export const LOAD_BY_CATEGORY_SUCCESS = '[Products] successfully loaded products';
export const LOAD_BY_CATEGORY_FAILED = '[Products] failed to load products';

export class LoadByCategory implements Action {
    readonly type = LOAD_BY_CATEGORY;
    constructor(public payload: any) { }
}

export class LoadByCategoryFailed implements Action {
    readonly type = LOAD_BY_CATEGORY_FAILED;
    constructor(public payload: any) {
    }
}
export class LoadByCategorySuccess implements Action {
    readonly type = LOAD_BY_CATEGORY_SUCCESS;
    constructor(public payload: any) {
    }
}

export type ProductActions = LoadByCategory | LoadByCategoryFailed | LoadByCategorySuccess
