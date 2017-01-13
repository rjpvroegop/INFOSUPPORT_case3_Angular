import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Account} from "../models/account";

@Injectable()
export class AccountService {
  accountUrl = "http://localhost:10001/bsklantbeheer/accounts/";
  saveCustomerUrl = "http://localhost:10001/bsklantbeheer/customers/editcustomer";
  newAccountUrl = "http://localhost:10001/bsklantbeheer/accounts/newaccount";

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
