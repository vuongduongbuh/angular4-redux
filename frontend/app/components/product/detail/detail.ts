import { Component } from '@angular/core';

declare var CloudZoom;
declare var $;
@Component({
    selector: 'lt-product-detail',
    templateUrl: './detail.html'
})

export class LtProductDetail {
    owlCarouselOptions: any;
    constructor() {
        this.owlCarouselOptions = {
            items: 5,
            dots: false,
            nav: true,
            navText: ["<div class='icon--prev'> </div>", "<div class='icon--next'> </div>"]
        }
    }

    ngAfterViewInit() {
        $(".lt-product-detail__media img").elevateZoom({ scrollZoom: true, zoomWindowPosition: 1, zoomWindowOffetx: 60, zoomWindowWidth: 500, zoomWindowHeight: 500, borderSize: 0 });
    }
}
