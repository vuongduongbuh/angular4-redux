import { Component, Input } from '@angular/core';
import { Store, Dispatcher } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromRoot from '../../../store/index';
import * as checkout from '../../../store/checkout/checkout.actions';
import * as auth from '../../../store/auth/auth.actions';
import * as common from '../../../store/common/common.actions';
@Component({
  selector: 'lt-checkout-shipping',
  templateUrl: './shipping.html',
  styleUrls: ['./shipping.less']
})

export class LtCheckoutShippingComponent {
  @Input("currentStep")
  currentStep: any;
  
  constructor(private store: Store<fromRoot.AppState>) {
  
  }

  updateShippingInformation() {
    let shippingInfo = {
      "addressInformation": {
        "shippingAddress": {
          "id": 0,
          "region": "string",
          "regionId": 0,
          "regionCode": "string",
          "countryId": "string",
          "street": [
            "string"
          ],
          "company": "string",
          "telephone": "string",
          "fax": "string",
          "postcode": "string",
          "city": "string",
          "firstname": "string",
          "lastname": "string",
          "middlename": "string",
          "prefix": "string",
          "suffix": "string",
          "vatId": "string",
          "customerId": 0,
          "email": "string",
          "sameAsBilling": 0,
          "customerAddressId": 0,
          "saveInAddressBook": 0,
          "extensionAttributes": {
            "giftRegistryId": 0
          },
          "customAttributes": [
            {
              "attributeCode": "string",
              "value": "string"
            }
          ]
        },
        "billingAddress": {
          "id": 0,
          "region": "string",
          "regionId": 0,
          "regionCode": "string",
          "countryId": "string",
          "street": [
            "string"
          ],
          "company": "string",
          "telephone": "string",
          "fax": "string",
          "postcode": "string",
          "city": "string",
          "firstname": "string",
          "lastname": "string",
          "middlename": "string",
          "prefix": "string",
          "suffix": "string",
          "vatId": "string",
          "customerId": 0,
          "email": "string",
          "sameAsBilling": 0,
          "customerAddressId": 0,
          "saveInAddressBook": 0,
          "extensionAttributes": {
            "giftRegistryId": 0
          },
          "customAttributes": [
            {
              "attributeCode": "string",
              "value": "string"
            }
          ]
        },
        "shippingMethodCode": "string",
        "shippingCarrierCode": "string",
        "extensionAttributes": {},
        "customAttributes": [
          {
            "attributeCode": "string",
            "value": "string"
          }
        ]
      }
    };
    
  }
}