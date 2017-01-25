import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Account} from "../models/account";
import {environment} from "../../environments/environment";
import {popupMessage} from "../../assets/js/popup";
import {LoginService} from "./login.service";

@Injectable()
export class AccountService {
  accountUrl = environment.url + "/bsklantbeheer/accounts/";
  saveCustomerUrl = environment.url + "/bsklantbeheer/customers/editcustomer";
  newAccountUrl = environment.url + "/bsklantbeheer/accounts/newaccount";
  loginUrl = environment.url + "/login";
  constructor(private http: Http, private loginService: LoginService) {
  }

  updateCustomer(customer) {
    return new Promise((res, rej) => {
      this.http.put(this.saveCustomerUrl, customer).subscribe(
        data => {
          this.loginService.saveCustomer(customer);
          res(data.json());
        },
        err => new popupMessage('Customer update failed', 'Customer update failed', 'danger'));
    });
  }

  newAccount(account) {
    return new Promise((res, rej) => {
      this.http.post(this.newAccountUrl, account).subscribe(
        data => res(data.json()),
        err => new popupMessage('Account registration failed', 'Account registration failed', 'danger')
      );
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
