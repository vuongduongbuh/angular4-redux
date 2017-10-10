import { Component, Input } from '@angular/core';
import { Store, Dispatcher } from "@ngrx/store";
import { Observable } from "rxjs";

import { DialogService } from "ng2-bootstrap-modal";
import { RegisterModal } from "../../modals/register/register";

import * as auth from '../../store/auth/auth.actions';
import * as fromRoot from '../../store/index';
import * as checkout from '../../store/checkout/checkout.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.html'
})

export class AppHeader {
  @Input("logoImg")
  logoImg: any;

  @Input("isLoggedIn")
  isLoggedIn: any;

  constructor(private dispatcher: Dispatcher, private store: Store<fromRoot.AppState>, private dialogService: DialogService) {

  }

  showRegisterModal() {
    let disposable = this.dialogService.addDialog(RegisterModal, {
          title: 'Confirm title'
      });
  }
}
