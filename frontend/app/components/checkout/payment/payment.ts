import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { DialogService } from "ng2-bootstrap-modal";
import { ConfirmModal } from '../../../modals/confirm/confirm';
import * as fromRoot from '../../../store/index';
import * as checkout from '../../../store/checkout/checkout.actions';

@Component({
  selector: 'lt-checkout-payment',
  templateUrl: './payment.html',
  styleUrls: ['./payment.less']
})

export class LtCheckoutPaymentComponent {
  paymentType: number = 1;
  isRequiredRedBill: any;
  constructor(private store: Store<fromRoot.AppState>, private dialogService: DialogService) {

  }

  selectPaymentType(type) {
    this.paymentType = type;
  }

  backToPreviousStep() {
    this.dialogService.addDialog(ConfirmModal, {
            title: 'Confirm title'
        }).subscribe((isConfirm) => {
            if(isConfirm) {
                this.store.dispatch(new checkout.UpdateCurrentStep(3));
            }
        });
  }

  submitPayment() {
    this.store.dispatch(new checkout.UpdateCurrentStep(5));
  }
}