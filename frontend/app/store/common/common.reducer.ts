import * as common from './common.actions';

import * as _ from 'lodash';

export interface State {
  loaded: boolean;
  loading: boolean;
  cities: Array<any>;
  districts: Array<any>;
  wards: Array<any>;
};

const initialState: State = {
  loaded: false,
  loading: false,
  cities: [],
  districts: [],
  wards: []
};

export function reducer(state = initialState, action: common.CommonActions): State {
  switch (action.type) {

    case common.LOAD_CITIES: {
      return Object.assign({}, state, {
        loading: true,
        districts: [],
        wards: []
      });
    }

    case common.LOAD_CITIES_SUCCESS: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        cities: action.payload
      });
    }

    case common.LOAD_CITIES_FAILED: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        cities: []
      });
    }

    case common.LOAD_DISTRICTS: {
      return Object.assign({}, state, {
        loading: true,
        wards: [],
        districts: []
      });
    }

    case common.LOAD_DISTRICTS_SUCCESS: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        districts: action.payload
      });
    }

    case common.LOAD_DISTRICTS_FAILED: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        cities: []
      });
    }

    case common.LOAD_WARDS: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case common.LOAD_WARDS_SUCCESS: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        wards: action.payload
      });
    }

    case common.LOAD_WARDS_FAILED: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        cities: []
      });
    }
    default:
      return state;
  }

}
/*
 Selectors for the state that will be later
 used in the common-list component
 */
export const getCities = (state: State) => state.cities;
export const getDistricts = (state: State) => state.districts;
export const getWards = (state: State) => state.wards;
export const getLoadingState = (state: State) => state.loading;
