import { Component, Input } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromRoot from '../../../store/index';
import * as checkout from '../../../store/checkout/checkout.actions';

@Component({
  selector: 'lt-checkout-deliver',
  templateUrl: './deliver.html',
  styleUrls: ['./deliver.less']
})

export class LtCheckoutDeliverComponent {
  constructor(private store: Store<fromRoot.AppState>) {

  }

  goToNextStep() {
    this.store.dispatch(new checkout.UpdateCurrentStep(4));
  }

  backToPreviousStep() {
    this.store.dispatch(new checkout.UpdateCurrentStep(2));
  }
}