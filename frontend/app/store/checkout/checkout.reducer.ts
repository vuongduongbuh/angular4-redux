import * as cart from './checkout.actions';
import * as _ from 'lodash';
export interface State {
    loaded: boolean;
    loading: boolean;
    count: number;
    items: Array<any>;
    info: any;
    currentStep: number;
    shippingInfo: any;
};

const initialState: State = {
    loaded: false,
    loading: false,
    count: 0,
    items: [],
    info: { items_count: 0, items_qty: 0 },
    currentStep: 1,
    shippingInfo: {rule: [0, 0]}

};

export function reducer(state = initialState, action: cart.CartActions): State {
    switch (action.type) {

        // LOAD CART INFO 
        case cart.CART_LOAD: {
            return Object.assign({}, state, {
                loading: true,
                loaded: false
            });
        }

        case cart.CART_LOAD_SUCCESS: {
            const info = action.payload;
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                info: info,
                items: info.items,
                count: info.items.length
            });
        }

        case cart.CART_LOAD_FAILED: {
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                items: []
            });
        }

        //LOAD CART ITEMS
        case cart.CART_LOAD_ITEMS: {
            return Object.assign({}, state, {
                loading: true,
                loaded: false
            });
        }

        case cart.CART_LOAD_ITEMS_SUCCESS: {
            const items = action.payload;
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                items: items,
                count: items.length
            });
        }

        case cart.CART_LOAD_ITEMS_FAILED: {
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                items: [],
                count: 0
            });
        }

        // LOAD SHIPPING RULE
        case cart.CART_LOAD_SHIPPING_RULE: {
            return Object.assign({}, state, {
                loading: true,
                loaded: false
            });
        }

        case cart.CART_LOAD_SHIPPING_RULE_SUCCESS: {
            state.shippingInfo.rule = action.payload;
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                shippingInfo: state.shippingInfo
            });
        }

        case cart.CART_LOAD_SHIPPING_RULE_FAILED: {
            return Object.assign({}, state, {
                loaded: true,
                loading: false
            });
        }

        //ADD A ITEM TO CART
        case cart.CART_ADD_ITEMS: {
            return Object.assign({}, state, {
                loading: true,
                loaded: false
            });
        }

        case cart.CART_ADD_ITEMS_SUCCESS: {
            state.info.items_qty++;
            return Object.assign({}, state, {
                loaded: true,
                loading: false
            });
        }

        case cart.CART_ADD_ITEMS_FAILED: {
            return Object.assign({}, state, {
                loaded: true,
                loading: false
            });
        }

        //CREATE EMPTY CART
        case cart.CART_CREATE: {
            return Object.assign({}, state, {
                loading: true,
                loaded: false,
                items: []
            });
        }

        case cart.CART_CREATE_SUCCESS: {
            return Object.assign({}, state, {
                loaded: true,
                loading: false
            });
        }

        case cart.CART_CREATE_FAILED: {
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                items: []
            });
        }

        //UPDATE CART
        case cart.CART_UPDATE: {
            return Object.assign({}, state, {
                loading: true,
                loaded: false
            });
        }

        case cart.CART_UPDATE_SUCCESS: {
            const items = action.payload.items;
            const currentStep = action.payload.nextStep;

            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                items: items,
                currentStep: currentStep
            });
        }

         case cart.CART_UPDATE_FAILED: {
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                items: []
            });
        }

        //UPDATE CART SHIPPING INFO
        case cart.CART_UPDATE_SHIPPING_INFO: {
            return Object.assign({}, state, {
                loaded: false,
                loading: true
            });
        }

        case cart.CART_UPDATE_SHIPPING_INFO_SUCCESS: {
            return Object.assign({}, state, {
                loaded: true,
                loading: false
            });
        }

        case cart.CART_UPDATE_SHIPPING_INFO_FAILED: {
            return Object.assign({}, state, {
                loaded: true,
                loading: false
            });
        }

        //REFRESH CART WHEN PAGE REFRESH
        case cart.CART_REFRESH: {
            let cartInfo = JSON.parse(sessionStorage.getItem('cartInfo'));
            let cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                items: cartItems ? cartItems : [],
                info: cartInfo ? cartInfo : { items_count: 0, items_qty: 0 },
                count: cartItems ? cartItems.length : 0
            });
        }


        //UPDATE CURRENT STEP IN CHECKOUT
        case cart.UPDATE_CURRENT_STEP: {
            state.currentStep = action.payload;
            return _.cloneDeep(state);
        }

        default:
            return state;
    }

}
/*
 Selectors for the state that will be later
 used in the cart-list component
 */
export const getItems = (state: State) => state.items;
export const getItemsCount = (state: State) => state.count;
export const getInfo = (state: State) => state.info;
export const getLoadingState = (state: State) => state.loading;
export const getCurrentStep = (state: State) => state.currentStep;
export const getShippingInfo = (state: State) => state.shippingInfo;

