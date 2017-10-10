import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lt-product-recommend',
  templateUrl: './recommend.html',
  styleUrls: ['./recommend.less']
})
export class LtProductsRecommend {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }
}