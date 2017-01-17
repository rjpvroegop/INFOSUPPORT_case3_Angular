import {Component, ViewChild, AfterViewChecked} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {ActivatedRoute} from "@angular/router";
import {Account} from "../../models/account";
import {Customer} from "../../models/customer";
import { NgForm } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'customer-page',
  templateUrl: 'customer.component.html',
  styleUrls: ['customer.component.css']
})
export class CustomerComponent {
  newCustomer: boolean = true;
  account: Account;

  constructor(private route: ActivatedRoute, private accountService: AccountService) {
    this.account = new Account();
    this.account.customer = new Customer();
    this.account.customer.addresses = [];

    this.route.params.subscribe(params => {
      if (params['id'] != undefined) {
        this.newCustomer = false;

        this.getAccount(params['id']);
      }
    });
  }

  private getAccount(id: string) {
    this.accountService.getAccount(id)
      .then(account => {
        this.account = <Account> account;
        console.log(this.account);
      });
  }

  private registerAccount(account: Account) {
    this.accountService.newAccount(account).then(console.log);
  }

  private saveAccountInfo(account: Account) {
    this.accountService.updateCustomer(account.customer).then(console.log);
  }

  myDatePickerOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'yyyy-mm-dd',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    height: '34px',
    width: '260px',
    editableDateField : false,
    inline: false,
    disableUntil: {year: 2016, month: 8, day: 10},
    selectionTxtFontSize: '16px'
  };

  onDateChanged(event:any) {
    this.account.customer.birthDate = event.formatted;
    console.log(this.account.customer)
  }
}
