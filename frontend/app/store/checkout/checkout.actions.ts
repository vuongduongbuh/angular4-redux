import { type } from "../utils";
import { Action } from "@ngrx/store";

export const CART_LOAD = '[Cart] load cart';
export const CART_LOAD_SUCCESS = '[Cart] successfully loaded cart';
export const CART_LOAD_FAILED = '[Cart] failed to load cart';

export const CART_LOAD_ITEMS = '[Cart] load cart items';
export const CART_LOAD_ITEMS_SUCCESS = '[Cart] successfully loaded cart items';
export const CART_LOAD_ITEMS_FAILED = '[Cart] failed to load cart items';

export const CART_LOAD_SHIPPING_RULE = '[Cart] Load shipping rule';
export const CART_LOAD_SHIPPING_RULE_SUCCESS = '[Cart] successfully loaded shipping rule';
export const CART_LOAD_SHIPPING_RULE_FAILED = '[Cart] fail to load shipping rule';

export const CART_ADD_ITEMS = '[Cart] add cart items';
export const CART_ADD_ITEMS_SUCCESS = '[Cart] successfully added cart items';
export const CART_ADD_ITEMS_FAILED = '[Cart] failed to add cart items';

export const CART_CREATE = '[Cart] Create cart';
export const CART_CREATE_SUCCESS = '[Cart] successfully created cart';
export const CART_CREATE_FAILED = '[Cart] failed to create cart';

export const CART_UPDATE = '[Cart] update cart';
export const CART_UPDATE_SUCCESS = '[Cart] successfully updated cart';
export const CART_UPDATE_FAILED = '[Cart] failed to update cart';

export const CART_UPDATE_SHIPPING_INFO = '[Cart] update shipping info';
export const CART_UPDATE_SHIPPING_INFO_SUCCESS = '[Cart] successfully updated shipping info';
export const CART_UPDATE_SHIPPING_INFO_FAILED = '[Cart] failed to update shipping info';

export const CART_REFRESH = '[Cart] Refresh page';

export const UPDATE_CURRENT_STEP = '[Current Step] updated successfully';


//LOAD CART INFO
export class CartLoad implements Action {
    readonly type = CART_LOAD;
    constructor() { }
}

export class CartLoadFailed implements Action {
    readonly type = CART_LOAD_FAILED;

    constructor(public payload: any) {
    }
}

export class CartLoadSuccess implements Action {
    readonly type = CART_LOAD_SUCCESS;
    constructor(public payload: any) {
    }
}

//LOAD ITEMS IN CART
export class CartLoadItems implements Action {
    readonly type = CART_LOAD_ITEMS;
    constructor() { }
}

export class CartLoadItemsFailed implements Action {
    readonly type = CART_LOAD_ITEMS_FAILED;

    constructor(public payload: any) {
    }
}

export class CartLoadItemsSuccess implements Action {
    readonly type = CART_LOAD_ITEMS_SUCCESS;
    constructor(public payload: any) {
    }
}

//LOAD SHIPPING RULE
export class CartLoadShippingRule implements Action {
    readonly type = CART_LOAD_SHIPPING_RULE;
    constructor(public payload: any) { }
}

export class CartLoadShippingRuleFailed implements Action {
    readonly type = CART_LOAD_SHIPPING_RULE_FAILED;

    constructor(public payload: any) {
    }
}

export class CartLoadShippingRuleSuccess implements Action {
    readonly type = CART_LOAD_SHIPPING_RULE_SUCCESS;
    constructor(public payload: any) {
    }
}

// ADD A ITEM TO CART
export class CartAddItems implements Action {
    readonly type = CART_ADD_ITEMS;
    constructor(public payload: any) { }
}

export class CartAddItemsFailed implements Action {
    readonly type = CART_ADD_ITEMS_FAILED;

    constructor(public payload: any) {
    }
}

export class CartAddItemsSuccess implements Action {
    readonly type = CART_ADD_ITEMS_SUCCESS;
    constructor(public payload: any) {
    }
}

//CREATE AN EMPTY CART
export class CartCreate implements Action {
    readonly type = CART_CREATE;
    constructor() { }
}

export class CartCreateSuccess implements Action {
    readonly type = CART_CREATE_SUCCESS;
    constructor(public payload: any) { }
}

export class CartCreateFailed implements Action {
    readonly type = CART_CREATE_FAILED;
    constructor(public payload: any) { }
}

//UPDATE CART
export class CartUpdate implements Action {
    readonly type = CART_UPDATE;
    constructor(public payload: any) {

    }
}

export class CartUpdateFailed implements Action {
    readonly type = CART_UPDATE_FAILED;
    constructor(public payload: any) {

    }
}

export class CartUpdateSuccess implements Action {
    readonly type = CART_UPDATE_SUCCESS;
    constructor(public payload: any) {

    }
}

//UPDATE SHIPPING INFO
export class CartUpdateShippingInfo implements Action {
    readonly type = CART_UPDATE_SHIPPING_INFO;
    constructor(public payload: any) {

    }
}

export class CartUpdateShippingInfoFailed implements Action {
    readonly type = CART_UPDATE_SHIPPING_INFO_FAILED;
    constructor(public payload: any) {

    }
}

export class CartUpdateShippingInfoSuccess implements Action {
    readonly type = CART_UPDATE_SHIPPING_INFO_SUCCESS;
    constructor(public payload: any) {

    }
}

//REFRESH CART WHEN PAGE REFRESH
export class CartRefresh implements Action {
    readonly type= CART_REFRESH;
    constructor() {
        
    }
}

//UPDATE CURRENT STEP IN CHECKOUT
export class UpdateCurrentStep implements Action {
    readonly type = UPDATE_CURRENT_STEP;
    constructor(public payload: any) {

    }
}

export type CartActions =
    CartLoad | CartLoadFailed | CartLoadSuccess |
    CartLoadItems | CartLoadItemsFailed | CartLoadItemsSuccess |
    CartLoadShippingRule | CartLoadShippingRuleFailed | CartLoadShippingRuleSuccess |
    CartAddItems | CartAddItemsFailed | CartAddItemsSuccess |
    CartCreate | CartCreateSuccess | CartCreateFailed |
    CartUpdate | CartUpdateFailed | CartUpdateSuccess |
    CartUpdateShippingInfo | CartUpdateShippingInfoFailed | CartUpdateShippingInfoSuccess |
    UpdateCurrentStep | CartRefresh
