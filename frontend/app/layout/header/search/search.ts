import { Component, Input } from '@angular/core';
import { Store, Dispatcher } from "@ngrx/store";
import { Observable } from "rxjs";

import * as auth from '../../../store/auth/auth.actions';
import * as fromRoot from '../../../store/index';
import * as checkout from '../../../store/checkout/checkout.actions';

@Component({
  selector: 'app-header-search',
  templateUrl: './search.html'
})

export class AppHeaderSearch {
    
}