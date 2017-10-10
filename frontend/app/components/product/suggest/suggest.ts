import { Component } from '@angular/core';

@Component({
  selector: 'lt-product-suggest',
  templateUrl: './suggest.html',
  styleUrls: ['./suggest.less']
})
export class LtProductSuggest {

  owlCarouselOptions: any;
  constructor() {
    this.owlCarouselOptions = {
      items: 6,
      dots: false,
      nav: true,
      navText: ["<span class='icon-wrap'></span>", "<span class='icon-wrap'></span>"]
    }
  }
}
