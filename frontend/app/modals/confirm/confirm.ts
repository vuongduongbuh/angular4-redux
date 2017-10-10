import { Component } from '@angular/core';
import { Store, Dispatcher } from "@ngrx/store";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Observable } from "rxjs";
import { RegisterModal } from '../register/register';

import * as auth from '../../store/auth/auth.actions';
import * as fromRoot from '../../store/index';
import * as checkout from '../../store/checkout/checkout.actions';
export interface IConfirmModal {
    title: string;
}

@Component({
    selector: 'lt-confirm-modal',
    templateUrl: "./confirm.html",
    styleUrls: ['./confirm.less']
})
export class ConfirmModal extends DialogComponent<IConfirmModal, boolean> implements IConfirmModal {
    title: any;
    constructor(dialogService: DialogService) {
        super(dialogService);
        document.body.classList.add("body--block-scroll");
    }

    closeModal() {
        document.body.classList.remove("body--block-scroll");
        this.close();
    }

    confirm() {
        this.result = true;
        document.body.classList.remove("body--block-scroll");
        this.close();
    }
}