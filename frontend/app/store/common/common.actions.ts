import { type } from "../utils";
import { Action } from "@ngrx/store";

/*
 Because the Common collection is asynchronous, there need to be actions to handle
 each of the stages of the request.
 */
export const LOAD_CITIES = '[Common] load cities';
export const LOAD_CITIES_SUCCESS = '[Common] successfully loaded cities';
export const LOAD_CITIES_FAILED = '[Common] failed to load cities';

export const LOAD_DISTRICTS = '[Common] load districts';
export const LOAD_DISTRICTS_SUCCESS = '[Common] successfully loaded districts';
export const LOAD_DISTRICTS_FAILED = '[Common] failed to load districts';

export const LOAD_WARDS = '[Common] load wards';
export const LOAD_WARDS_SUCCESS = '[Common] successfully loaded wards';
export const LOAD_WARDS_FAILED = '[Common] failed to load wards';

export class LoadCities implements Action {
    readonly type = LOAD_CITIES;
    constructor() { }
}

export class LoadCitiesFailed implements Action {
    readonly type = LOAD_CITIES_FAILED;
    constructor(public payload: any) {

    }
}
export class LoadCitiesSuccess implements Action {
    readonly type = LOAD_CITIES_SUCCESS;
    constructor(public payload: any) {
    }
}

export class LoadDistricts implements Action {
    readonly type = LOAD_DISTRICTS;
    constructor(public payload: any) { }
}

export class LoadDistrictsFailed implements Action {
    readonly type = LOAD_DISTRICTS_FAILED;
    constructor(public payload: any) {

    }
}
export class LoadDistrictsSuccess implements Action {
    readonly type = LOAD_DISTRICTS_SUCCESS;
    constructor(public payload: any) {
    }
}

export class LoadWards implements Action {
    readonly type = LOAD_WARDS;
    constructor(public payload: any) { }
}

export class LoadWardsFailed implements Action {
    readonly type = LOAD_WARDS_FAILED;
    constructor(public payload: any) {

    }
}

export class LoadWardsSuccess implements Action {
    readonly type = LOAD_WARDS_SUCCESS;
    constructor(public payload: any) {
    }
}

export type CommonActions = 
        LoadCities | LoadCitiesFailed | LoadCitiesSuccess |
        LoadDistricts | LoadDistrictsFailed | LoadDistrictsSuccess |
        LoadWards | LoadWardsFailed | LoadWardsSuccess

