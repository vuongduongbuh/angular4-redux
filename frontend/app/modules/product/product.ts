import { Component } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
//Redux
import { Store, Dispatcher } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromRoot from '../../store/index';
import * as checkout from '../../store/checkout/checkout.actions';

@Component({
    selector: 'app-product',
    templateUrl: './product.html',
    styleUrls: ['./product.less']
})

export class LotteProduct {
    constructor(private store: Store<fromRoot.AppState>, private dispatcher: Dispatcher, private activatedRoute: ActivatedRoute) {
        console.log(activatedRoute);
        
        this.activatedRoute.queryParams.subscribe((data) => {
            console.log(data);
        })
    }
}