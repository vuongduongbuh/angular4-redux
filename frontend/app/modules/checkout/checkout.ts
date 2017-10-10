import { Component } from '@angular/core';
//Redux
import { Store, Dispatcher } from "@ngrx/store";
import { Observable } from "rxjs";
import { DialogService } from "ng2-bootstrap-modal";
import { ConfirmModal } from '../../modals/confirm/confirm';
import * as fromRoot from '../../store/index';
import * as checkout from '../../store/checkout/checkout.actions';
import * as common from '../../store/common/common.actions';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.html',
    styleUrls: ['./checkout.less']
})

export class LotteCheckout {
    currentStep: number = 1;
    cartItems$: Observable<any>;
    cartInfo$: Observable<any>;
    cartIsLoading$: Observable<any>;
    isLoggedIn$: Observable<any>;
    constructor(private store: Store<fromRoot.AppState>, private dispatcher: Dispatcher, private dialogService: DialogService) {
        this.dispatcher.filter((action) => action.type === checkout.UPDATE_CURRENT_STEP)
            .subscribe(() => {
                this.store.select(fromRoot.checkoutGetCurrentStep)
                    .subscribe((currentStep) => {
                        this.currentStep = currentStep;
                    })
            });
        this.cartItems$ = this.store.select(fromRoot.checkoutGetCartItems);
        this.cartInfo$ = this.store.select(fromRoot.checkoutGetCartInfo);
        this.cartIsLoading$ = this.store.select(fromRoot.checkoutGetLoadingState);
        this.isLoggedIn$ = this.store.select(fromRoot.authGetLoggedInState);
        this.getCartInfo();
        this.getCartItems();
        this._initMasterData();
    }

    getCartInfo() {
        this.store.dispatch(new checkout.CartLoad());
    }

    getCartItems() {
        this.store.dispatch(new checkout.CartLoadItems());
    }

    selectCheckoutStep(step) {
        if(step >= this.currentStep) {
            return;
        }

        this.dialogService.addDialog(ConfirmModal, {
            title: 'Confirm title'
        }).subscribe((isConfirm) => {
            if(isConfirm) {
                this.store.dispatch(new checkout.UpdateCurrentStep(step));
            }
        });
    }

    _initMasterData() {
        this.store.dispatch(new common.LoadCities());
    }
}