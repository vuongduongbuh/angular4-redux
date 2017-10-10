import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, Dispatcher } from "@ngrx/store";
import { Observable } from "rxjs";
import * as _ from 'lodash';
import * as fromRoot from '../../../../store/index';
import * as categories from '../../../../store/categories/categories.actions';
import * as products from '../../../../store/products/products.actions';

@Component({
  selector: 'lt-sidebar-tree',
  templateUrl: './tree.html',
  styleUrls: ['./tree.less']
})
export class LtSidebarTreeComponent {
  @Input("categories")
  categories: any;

  currentItemId: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private store: Store<fromRoot.AppState>, private dispatcher: Dispatcher) {
    //Load parent category
    this.store.dispatch(new categories.LoadCategories(176));
    
    dispatcher.filter(action => action.type === categories.LOAD_SUCCESS)
      .subscribe(() => {
        this.store.select(fromRoot.categoriesGetEntities)
          .subscribe((categories) => {
            this.categories = categories;
            this.currentItemId = this.activatedRoute.params['value'].id;
            this._findSelectedCategory(this.currentItemId);
          });
      });
  }

  selectCategory(category, ev) {
    this.categories.selectedSubcat = null;
    this.categories.selectedParentCategory = category;
    _.each(category.children_data, (subcat: any) => {
      subcat.isSelected = false;
    });

    _.each(this.categories.children_data, (category: any) => {
      category.isSelected = false;
    });

    category.isSelected = true;

    let url = this.activatedRoute.routeConfig.path.replace("/:id", "");
    this.router.navigate(["/" + url, category.id]);
    this.currentItemId = category.id;
    this.updateCategories();
    this.loadProductsByCategory();
    ev.stopPropagation();
  }

  selectSubcat(subcat, ev) {
    subcat.isSelected = true;
    this.categories.selectedSubcat = subcat;
    let url = this.activatedRoute.routeConfig.path.replace("/:id", "");
    this.router.navigate(["/" + url, subcat.id]);
    this.currentItemId = subcat.id;
    this.updateCategories();
    this.loadProductsByCategory();
    ev.stopPropagation();
  }

  loadProductsByCategory() {
    let actionPayload = {
      categoryId: this.activatedRoute.params['value'].id,
      filter: {
        page: 1,
        pageSize: 40
      }
    }

    this.store.dispatch(new products.LoadByCategory(actionPayload));
  }

  updateCategories() {
    this.store.dispatch(new categories.UpdateCategoriesSuccess(this.categories));
  }

  _findSelectedCategory(id) {
    _.each(this.categories.children_data, (category: any) => {
      if (category.id == id) {
        category.isSelected = true;
        this.categories.selectedParentCategory = category;
        return false;
      }

      _.each(category.children_data, (subcat: any) => {
        if (subcat.id == id) {
          category.isSelected = true;
          subcat.isSelected = true;
          this.categories.selectedParentCategory = category;
          this.categories.selectedSubcat = subcat;
          return false;
        }
      });
    });
  }
}
