import { type } from "../utils";
import { Action } from "@ngrx/store";

/*
 Because the Categories collection is asynchronous, there need to be actions to handle
 each of the stages of the request.
 */
export const LOAD = '[Categories] load categories';
export const LOAD_SUCCESS = '[Categories] successfully loaded categories';
export const LOAD_FAILED = '[Categories] failed to load categories';

export const UPDATE = '[Categories] update categories';
export const UPDATE_SUCCESS = '[Categories] successfully updated categories';
export const UPDATE_FAILED = '[Categories] failed to update categories';



export class LoadCategories implements Action {
    readonly type = LOAD;
    constructor(public payload: any) { }
}

export class LoadCategoriesFailed implements Action {
    readonly type = LOAD_FAILED;

    constructor(public payload: any) {
    }
}
export class LoadCategoriesSuccess implements Action {
    readonly type = LOAD_SUCCESS;
    constructor(public payload: any) {
    }
}

export class UpdateCategories implements Action {
    readonly type = UPDATE;
    constructor(public payload: any) { }
}

export class UpdateCategoriesFailed implements Action {
    readonly type = UPDATE_FAILED;

    constructor() {
    }
}
export class UpdateCategoriesSuccess implements Action {
    readonly type = UPDATE_SUCCESS;
    constructor(public payload: any) {
    }
}

export type Categoriess = LoadCategories | LoadCategoriesFailed | LoadCategoriesSuccess 
                                | UpdateCategories | UpdateCategoriesSuccess | UpdateCategoriesFailed
