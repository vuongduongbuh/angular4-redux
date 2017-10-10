import { Component } from '@angular/core';

import { HttpService} from '../../services/http.service';

//Redux
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromRoot from '../../store/index';
import * as categories from '../../store/categories/categories.actions';

@Component({
  selector: 'app-category',
  templateUrl: './category.html',
  styleUrls: ['./category.less']
})

export class LotteCategory {
  categories$: Observable<any>;
  
  constructor(private httpService: HttpService, private store: Store<fromRoot.AppState>) {
      this.categories$ = this.store.select(fromRoot.categoriesGetEntities);
  }
}
