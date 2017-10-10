import { Component } from '@angular/core';
import { Store, Dispatcher } from "@ngrx/store";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Observable } from "rxjs";

import * as auth from '../../store/auth/auth.actions';
import * as fromRoot from '../../store/index';
import * as checkout from '../../store/checkout/checkout.actions';
export interface IRegisterModal {
    title: string;
}

@Component({
    selector: 'lt-register-modal',
    templateUrl: "./register.html",
    styleUrls: ['./register.less']
})
export class RegisterModal extends DialogComponent<IRegisterModal, boolean> implements IRegisterModal {
    title: string;
    store: any;
    constructor(dialogService: DialogService, store: Store<fromRoot.AppState>) {
        super(dialogService);
        this.store = store;
        document.body.classList.add("body--block-scroll");
    }

    confirm() {
        this.result = true;
        this.close();
        document.body.classList.remove("body--block-scroll");
    }

    closeModal(){
        document.body.classList.remove("body--block-scroll");
        this.close();
    }
}