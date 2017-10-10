import { Component, Input } from '@angular/core';
import { Store, Dispatcher } from "@ngrx/store";
import { Observable } from "rxjs";
import { DialogService } from "ng2-bootstrap-modal";
import { ConfirmModal } from '../../../modals/confirm/confirm';
import * as fromRoot from '../../../store/index';
import * as checkout from '../../../store/checkout/checkout.actions';
import * as auth from '../../../store/auth/auth.actions';
@Component({
  selector: 'lt-checkout-order',
  templateUrl: './order.html',
  styleUrls: ['./order.less']
})

export class LtCheckoutOrderComponent {
  @Input("hideShippingInfo")
  hideShippingInfo: Boolean;

  cartInfo$: Observable<any>;
  cartItems$: Observable<any>;
  cartShippingInfo$: Observable<any>;
  slimScrollOptions: any;
  constructor(private store: Store<fromRoot.AppState>, private dialogService: DialogService) {
    this.cartInfo$ = this.store.select(fromRoot.checkoutGetCartInfo);
    this.cartItems$ = this.store.select(fromRoot.checkoutGetCartItems);
    this.cartShippingInfo$ = this.store.select(fromRoot.checkoutGetShippingInfo);

    this.slimScrollOptions = {
      position: 'right',
      barOpacity: '0.5',
      barWidth: '7',
      gridBackground: 'transparent',
      barBackground: '#6e6e6e',
      alwaysVisible: false
    }
  }

  backToPreviousStep() {
    this.dialogService.addDialog(ConfirmModal, {
            title: 'Confirm title'
        }).subscribe((isConfirm) => {
            if(isConfirm) {
                this.store.dispatch(new checkout.UpdateCurrentStep(2));
            }
        });
  }
}