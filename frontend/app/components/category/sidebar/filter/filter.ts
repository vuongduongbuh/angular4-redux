import { Component, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lt-sidebar-filter',
  templateUrl: './filter.html',
  styleUrls: ['./filter.less']
})
export class LtSidebarFilterComponent {
  slimScrollOptions: any;
  uiSliderConfig: any;
  filterPriceRange: any;
  @ViewChild('mySlider')  mySlider: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  changeSlider() {
    this.mySlider.slider.set(this.filterPriceRange);
  }

  ngOnInit() {
    this.slimScrollOptions = {
      position: 'right',
      barOpacity: '0.5',
      barWidth: '7',
      gridBackground: 'transparent',
      barBackground: '#6e6e6e',
      alwaysVisible: false
    }

    this.filterPriceRange = [0, 20];
    this.uiSliderConfig = {
      behaviour: 'drag',
      connect: true,
      margin: 1,
      range: {
        min: 0,
        max: 20
      }
    };
  }
}
