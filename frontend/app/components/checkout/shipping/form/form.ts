import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { DialogService } from "ng2-bootstrap-modal";
import { ConfirmModal } from '../../../../modals/confirm/confirm';
import * as fromRoot from '../../../../store/index';
import * as checkout from '../../../../store/checkout/checkout.actions';
import * as common from '../../../../store/common/common.actions';
@Component({
  selector: 'lt-checkout-shipping-form',
  templateUrl: './form.html',
  styleUrls: ['./form.less']
})

export class LtCheckoutShippingFormComponent {
  addressInfomation: any;
  commonCities$: Observable<any>;
  commonDistricts$: Observable<any>;
  commonWards$: Observable<any>;
  userInfo: any;
  constructor(private store: Store<fromRoot.AppState>, private dialogService: DialogService) {
    this.commonCities$ = this.store.select(fromRoot.commonGetCities);
    this.commonDistricts$ = this.store.select(fromRoot.commonGetDistricts);
    this.commonWards$ = this.store.select(fromRoot.commonGetWards);

    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    console.log(this.userInfo);
    this.addressInfomation = {
      shippingAddress: {
        street: [""],
        email: this.userInfo.email
      }
    }
  }

  selectArea(cityId, districtId) {
    if(districtId) {
      this.store.dispatch(new common.LoadWards(districtId));
      return;
    }
    this.store.dispatch(new common.LoadDistricts(cityId));
  }

  goToNextStep(ngForm) {

    //Set touched
    for (let control in ngForm.form.controls) {
        ngForm.form.get(control).markAsTouched();
    }

    if(ngForm.valid) {
      this.store.dispatch(new checkout.UpdateCurrentStep(3));
    }
  }

  backToPreviousStep() {
    this.dialogService.addDialog(ConfirmModal, {
            title: 'Confirm title'
        }).subscribe((isConfirm) => {
            if(isConfirm) {
                this.store.dispatch(new checkout.UpdateCurrentStep(1));
            }
        });
  }
}