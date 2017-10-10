/*
  Import createSelector from reselect to make selection of different parts of the state fast efficient
 */
import { createSelector } from 'reselect';
/*
  Import the store logger to log all the actions to the console
 */
import { storeLogger } from "ngrx-store-logger";

import { compose } from "@ngrx/core";
import { combineReducers, State } from "@ngrx/store";
import { state } from "@angular/core";

/*
 Import the layout state
 */
import * as fromAuth from "./auth/auth.reducer";
import * as fromProducts from "./products/products.reducer";
import * as fromCategories from "./categories/categories.reducer";
import * as fromCheckout from "./checkout/checkout.reducer";
import * as fromCommon from "./common/common.reducer";
import * as fromAccount from "./account/account.reducer";


export interface AppState {
    auth: fromAuth.State,
    products: fromProducts.State,
    categories: fromCategories.State,
    checkout: fromCheckout.State,
    common: fromCommon.State,
    account: fromAccount.State
}

export const reducers = {
    auth: fromAuth.reducer,
    products: fromProducts.reducer,
    categories: fromCategories.reducer,
    checkout: fromCheckout.reducer,
    common: fromCommon.reducer,
    account: fromAccount.reducer
};



const developmentReducer: Function = compose(storeLogger(), combineReducers)(reducers);


export function reducer(state: any, action: any) {
    return developmentReducer(state, action);
}

/*
Common
 */
export const commonGetState = (state: AppState) => state.common;

export const commonGetLoadingState = createSelector(commonGetState, fromCommon.getLoadingState);

export const commonGetCities = createSelector(commonGetState, fromCommon.getCities);

export const commonGetDistricts = createSelector(commonGetState, fromCommon.getDistricts);

export const commonGetWards = createSelector(commonGetState, fromCommon.getWards);


/*
Authorize
 */

export const authGetState = (state: AppState) => state.auth;

export const authGetLoadingState = createSelector(authGetState, fromAuth.getLoadingState);

export const authGetLoggedInState = createSelector(authGetState, fromAuth.getLoggedInState);

export const authGetUserInfo = createSelector(authGetState, fromAuth.getUserInfo);

/*
Account
 */

export const accountGetState = (state: AppState) => state.account;
export const accountGetLoadingState = createSelector(accountGetState, fromAccount.getLoadingState);

/*
Products
 */

export const productsGetState = (state: AppState) => state.products;

export const productsGetEntities = createSelector(productsGetState, fromProducts.getEntities);

export const productsGetCount = createSelector(productsGetState, fromProducts.getCount);

export const productsGetFilter = createSelector(productsGetState, fromProducts.getFilter);

export const productsGetPages = createSelector(productsGetState, fromProducts.getPages);

export const productsGetLoadingState = createSelector(productsGetState, fromProducts.getLoadingState);


/*
Categories
 */

export const categoriesGetState = (state: AppState) => state.categories;

export const categoriesGetEntities = createSelector(categoriesGetState, fromCategories.getEntities);

export const categoriesGetCount = createSelector(categoriesGetState, fromCategories.getCount);

export const categoriesGetPage = createSelector(categoriesGetState, fromCategories.getPage);

export const categoriesGetLoadingState = createSelector(categoriesGetState, fromCategories.getLoadingState);

/*
Checkout
 */
export const checkoutGetState = (state: AppState) => state.checkout;

export const checkoutGetCartInfo = createSelector(checkoutGetState, fromCheckout.getInfo);

export const checkoutGetCartItems = createSelector(checkoutGetState, fromCheckout.getItems);

export const checkoutGetCartItemsCount = createSelector(checkoutGetState, fromCheckout.getItemsCount);

export const checkoutGetLoadingState = createSelector(checkoutGetState, fromCheckout.getLoadingState);

export const checkoutGetCurrentStep = createSelector(checkoutGetState, fromCheckout.getCurrentStep);

export const checkoutGetShippingInfo = createSelector(checkoutGetState, fromCheckout.getShippingInfo);

