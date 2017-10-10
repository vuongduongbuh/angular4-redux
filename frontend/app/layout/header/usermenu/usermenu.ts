import { Component, Input } from '@angular/core';
import { Store, Dispatcher } from "@ngrx/store";
import { DialogService } from "ng2-bootstrap-modal";
import { LoginModal } from "../../../modals/login/login";
import { Observable } from "rxjs";

import * as auth from '../../../store/auth/auth.actions';
import * as fromRoot from '../../../store/index';
import * as checkout from '../../../store/checkout/checkout.actions';

@Component({
    selector: 'app-header-user-menu',
    templateUrl: './usermenu.html',
    styleUrls: ['./usermenu.less']
})

export class AppHeaderUserMenu {
    @Input("isLoggedIn")
    isLoggedIn: any;

    cartItems$: Observable<any>;
    cartInfo$: Observable<any>;
    userInfo$: Observable<any>;
    cartItemsCount$: Observable<any>;
    isItemAddedSuccessfully: Boolean;
    assetUrl: any;
    
    constructor(private dispatcher: Dispatcher, private store: Store<fromRoot.AppState>, private dialogService: DialogService) {
        this.cartItemsCount$ = this.store.select(fromRoot.checkoutGetCartItemsCount);
        this.cartItems$ = this.store.select(fromRoot.checkoutGetCartItems);
        this.cartInfo$ = this.store.select(fromRoot.checkoutGetCartInfo);
        this.userInfo$ = this.store.select(fromRoot.authGetUserInfo);
        this.assetUrl = sessionStorage.getItem('assetUrl');

        dispatcher.filter(action => action.type === checkout.CART_ADD_ITEMS_SUCCESS)
            .subscribe((state) => {
                this.showNotification();
            });
        
        dispatcher.filter(action => action.type === auth.LOGOUT_SUCCESS)
            .subscribe((state) => {
                this.store.dispatch(new auth.RefreshPage());
                this.store.dispatch(new checkout.CartRefresh());
            });
    }

    showLoginModal() {
        let disposable = this.dialogService.addDialog(LoginModal, {
            title: 'Confirm title',
            message: 'Confirm message'
        });
    }

    logout() {
        this.store.dispatch(new auth.Logout(1));
    }

    showNotification() {
        this.isItemAddedSuccessfully = true;
        setTimeout(() => {
            this.isItemAddedSuccessfully = false;
        }, 4000)
    }
}