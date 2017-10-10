import * as products from './products.actions';

import * as _ from 'lodash';

export interface State {
  loaded: boolean;
  loading: boolean;
  entities: Array<any>;
  count: number;
  filter: any,
  pages: Array<any>;
  sortBy: any
};

const initialState: State = {
  loaded: false,
  loading: false,
  entities: [],
  count: 0,
  filter: { page: 1, pageSize: 40 },
  pages: [1, 2, 3, 4, 5],
  sortBy: 1
};

export function reducer(state = initialState, action: products.ProductActions): State {
  switch (action.type) {

    case products.LOAD_BY_CATEGORY: {
      return Object.assign({}, state, {
        loading: true,
        loaded: false
      });
    }

    case products.LOAD_BY_CATEGORY_SUCCESS: {
      console.log(action);
      let filter = {
        page: action.payload.search_criteria.current_page,
        pageSize: action.payload.search_criteria.page_size
      };

      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        entities: action.payload.items,
        count: action.payload.total_count,
        filter: filter,
        pages: getPaginationPages(action.payload.total_count, filter.pageSize, filter.page)
      });
    }

    case products.LOAD_BY_CATEGORY_FAILED: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        entities: [],
        count: 0,
        pages: [1, 2, 3, 4, 5]
      });
    }
    default:
      return state;
  }

}

function getPaginationPages(count, pageSize, currentPage) {
  let numberOfPages = Math.floor(count % pageSize == 0 ? count / pageSize : count / pageSize + 1);
  let pages = [];
  if (!currentPage || currentPage <= 3 || currentPage > numberOfPages) {
    let maxPage = numberOfPages >= 5 ? 5 : numberOfPages;
    for (let i = 1; i <= maxPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  if (currentPage >= numberOfPages - 2) {
    let min = numberOfPages - 4;
    for (let i = min; i <= numberOfPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  let min = currentPage - 2;
  let max = currentPage + 2;
  for (let i = min; i <= max; i++) {
    pages.push(i);
  }
  return pages;
}
/*
 Selectors for the state that will be later
 used in the products-list component
 */
export const getEntities = (state: State) => state.entities;
export const getPages = (state: State) => state.pages;
export const getFilter = (state: State) => state.filter;
export const getCount = (state: State) => state.count;
export const getLoadingState = (state: State) => state.loading;
