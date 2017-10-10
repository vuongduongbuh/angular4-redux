import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'app-header-main-nav',
    templateUrl: './mainnav.html',
    styleUrls: ['./mainnav.less']
})

export class AppHeaderMainNav {
    isOpenPromotionNav: any;
    constructor() {

    }

    togglePromotionDropdown(flag) {
        if(flag ==='close') {
            this.isOpenPromotionNav = '';
            return;
        } 

        if(this.isOpenPromotionNav) {
            this.isOpenPromotionNav = '';
        } else {
            this.isOpenPromotionNav = 'open';
        }
    }

    
}