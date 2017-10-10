import * as auth from './auth.actions';

export interface State {
  loaded: boolean;
  loading: boolean;
  isLoggedIn: Boolean;
  userInfo: any;
};

const initialState: State = {
  loaded: false,
  loading: false,
  isLoggedIn: false,
  userInfo: {}
};

export function reducer(state = initialState, action: auth.AuthActions): State {
  switch (action.type) {


    case auth.LOGIN: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case auth.LOGIN_SUCCESS: {
      console.log(action);
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        isLoggedIn: true
      });
    }

    case auth.LOGIN_FAILED: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        isLoggedIn: false
      });
    }

    case auth.LOGOUT: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case auth.LOGOUT_SUCCESS: {
      console.log(action);
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        isLoggedIn: false
      });
    }

    case auth.LOGOUT_FAILED: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        isLoggedIn: true
      });
    }

    case auth.USER_LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case auth.USER_LOAD_SUCCESS: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        userInfo: action.payload
      });
    }

    case auth.USER_LOAD_FAILED: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false
      });
    }

    case auth.REFRESH_PAGE: {
      let token = sessionStorage.getItem('token');
      let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
      return Object.assign({}, state, {
        isLoggedIn: token ? true : false,
        userInfo: userInfo ? userInfo : {}
      })
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
export const getLoggedInState = (state: State) => state.isLoggedIn;
export const getUserInfo = (state: State) => state.userInfo;
