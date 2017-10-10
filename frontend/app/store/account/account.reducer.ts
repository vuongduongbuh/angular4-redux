import * as account from './account.actions';

export interface State {
  loaded: boolean;
  loading: boolean;
};

const initialState: State = {
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: account.AccountActions): State {
  switch (action.type) {


    case account.REGISTER: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case account.REGISTER_SUCCESS: {
      console.log(action);
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        isLoggedIn: true
      });
    }

    case account.REGISTER_FAILED: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false
      });
    }

    default:
      return state;
  }

}
/*
 Selectors for the state that will be later
 used in the categories-list component
 */
export const getLoadingState = (state: State) => state.loading;
