import {Component} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {ActivatedRoute} from "@angular/router";
import {Account} from "../../models/account";
import {Customer} from "../../models/customer";

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
}
