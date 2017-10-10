import * as categories from './categories.actions';

export interface State {
  loaded: boolean;
  loading: boolean;
  entities: Array<any>;
  count: number;
  page: number;
};

const initialState: State = {
  loaded: false,
  loading: false,
  entities: [],
  count: 0,
  page: 1
};

export function reducer(state = initialState, action: categories.Categoriess): State {
  switch (action.type) {


    case categories.LOAD: {
      const page = action.payload;

      return Object.assign({}, state, {
        loading: true,
        /*
         If there is no page selected, use the page from the initial state
         */
        page: page == null ? state.page : page
      });
    }

    case categories.LOAD_SUCCESS: {
      const categories = action.payload;

      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        entities: categories,
        count: 0
      });
    }

    case categories.LOAD_FAILED: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        entities: [],
        count: 0
      });
    }

    case categories.UPDATE: {
      return Object.assign({}, state, {
        loaded: false,
        loading: true,
        entities: [],
        count: 0
      });
    }

    case categories.UPDATE_SUCCESS: {
      const categories = action.payload;

      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        entities: categories,
        count: 0
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
export const getEntities = (state: State) => state.entities;
export const getPage = (state: State) => state.page;
export const getCount = (state: State) => state.count;
export const getLoadingState = (state: State) => state.loading;
