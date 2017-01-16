import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Account} from "../models/account";
import {environment} from "../../environments/environment";

@Injectable()
export class AccountService {
  accountUrl = environment.url + "/bsklantbeheer/accounts/";
  saveCustomerUrl = environment.url + "/bsklantbeheer/customers/editcustomer";
  newAccountUrl = environment.url + "/bsklantbeheer/accounts/newaccount";

  constructor(private http: Http) {
  }

  updateCustomer(customer) {
    return new Promise((res, rej) => {
      this.http.put(this.saveCustomerUrl, customer).subscribe(data => res(data.json()));
    });
  }

  newAccount(account) {
    return new Promise((res, rej) => {
      this.http.post(this.newAccountUrl, account).subscribe(data => res(data.json()));
    });
  }

  getAccount(id) {
    return new Promise((res, rej) => {
      this.http.get(this.accountUrl + id)
        .subscribe(
          (data) => res(this.extractAccount(data))
        );
    });
  }

  extractAccount(res) {
    let body = res.json();
    let account = <Account> body;
    return account;
  }
}
