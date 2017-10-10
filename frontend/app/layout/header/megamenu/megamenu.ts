import { Component, Input } from '@angular/core';
import { Store, Dispatcher } from "@ngrx/store";
import { Observable } from "rxjs";
import * as _ from 'lodash';
import * as auth from '../../../store/auth/auth.actions';
import * as fromRoot from '../../../store/index';
import * as checkout from '../../../store/checkout/checkout.actions';

@Component({
    selector: 'app-header-mega-menu',
    templateUrl: './megamenu.html'
})

export class AppHeaderMegaMenu {
    isOpenMainNav: any;
    constructor() {

    }

    toggleNavbarDropdown(flag) {
        if (flag === 'close') {
            this.isOpenMainNav = '';
            return;
        }

        if (this.isOpenMainNav) {
            this.isOpenMainNav = '';
            // let overlay = document.querySelector('.overlay-v');
            // overlay.parentNode.removeChild(overlay);
        } else {
            this.isOpenMainNav = 'open';
            // let overlayDiv = document.createElement("div");
            // overlayDiv.innerHTML = "<div class='overlay-v'> </div>";
            // document.querySelector('.page-wrapper').appendChild(overlayDiv);
        }
    }

    onMouseHoverMegaMenu(id, event) {
        let megaContent = document.querySelectorAll('.mega-content');
        _.each(megaContent, (ele) => {
            ele.classList.remove('active');
        });

        let quickTabs = document.querySelectorAll('.mega-menu .quicktabs li');
        _.each(quickTabs, (li) => {
            li.classList.remove('active');
        });
        
        event.target.classList.add('active');
        document.querySelector(id).classList.add('active');
    }
}