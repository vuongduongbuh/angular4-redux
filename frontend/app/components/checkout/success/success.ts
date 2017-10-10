import { Component, Input } from '@angular/core';

@Component({
  selector: 'lt-checkout-success',
  templateUrl: './success.html',
  styleUrls: ['./success.less']
})

export class LtCheckoutSuccessComponent {
  userInfo: any;
  constructor() {
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    console.log(this.userInfo);
  }
}