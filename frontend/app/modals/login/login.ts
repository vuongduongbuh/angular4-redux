import { Component } from '@angular/core';
import { Store, Dispatcher } from "@ngrx/store";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Observable } from "rxjs";
import { RegisterModal } from '../register/register';

import * as auth from '../../store/auth/auth.actions';
import * as fromRoot from '../../store/index';
import * as checkout from '../../store/checkout/checkout.actions';
export interface ILoginModal {
    title: string;
    message: string;
    isNotLoggedIn: Boolean;
}

@Component({
    selector: 'lt-login-modal',
    templateUrl: "./login.html",
    styleUrls: ['./login.less']
})
export class LoginModal extends DialogComponent<ILoginModal, boolean> implements ILoginModal {
    title: string;
    message: string;
    isNotLoggedIn: Boolean;
    store: any;
    dispatcher: any;
    isLoading: Boolean;
    isForGuest: Boolean;
    constructor(dialogService: DialogService, store: Store<fromRoot.AppState>, dispatcher: Dispatcher) {
        super(dialogService);
        this.store = store;
        this.dispatcher = dispatcher;

        //Event fires when login successully
        this.dispatcher.filter((action) => action.type === auth.LOGIN_SUCCESS)
            .subscribe(() => {
                sessionStorage.removeItem('cartId');
                this.store.dispatch(new auth.UserLoad());
                this.store.dispatch(new checkout.CartLoad());
            });

        this.dispatcher.filter((action) => action.type === auth.USER_LOAD_SUCCESS)
            .subscribe(() => {
                this.result = true;
                this.close();
                document.body.classList.remove("body--block-scroll");
            });

        document.body.classList.add("body--block-scroll");
    }

    openRegisterModal() {
        this.close();
        setTimeout(() => {
            this.dialogService.addDialog(RegisterModal, {});
        }, 200)
    }

    login() {
        this.isLoading = true;
        this.store.dispatch(new auth.Login(1));
    }

    closeModal() {
        document.body.classList.remove("body--block-scroll");
        this.close();
    }
}