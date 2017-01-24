import {Injectable} from "@angular/core";
import {Customer} from "../models/customer";
import {environment} from "../../environments/environment";
import {Http} from "@angular/http";
import {Account} from "../models/account";
import {Router} from "@angular/router";
import {popupMessage} from "../../assets/js/popup";

@Injectable()
export class LoginService {
  customer: Customer;
  private loginUrl = environment.url + "/bsklantbeheer/accounts/login";
  private localStorageKey = "kantilevercustomer";

  login(username: string, password: string) {
    return new Promise((res, rej) => {
      this.http.get(this.loginUrl + "/" + username + "/" + password,)
        .subscribe(
          (data) => {
            this.saveCustomer(this.extractAccount(data).customer);
            window.location.replace("")
            console.log(data)
          },
          err => new popupMessage('Login failed', 'Username and password not correct', 'danger')
        )
      ;
    })
  }

  constructor(private http: Http, private router: Router,) {
    this.getCustomer();
  }

  loggedIn() {
    return this.customer != null
  }

  extractAccount(res) {
    let body = res.json();
    let account = <Account> body;
    return account;
  }

  private saveCustomer(customer: Customer) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(customer));
    this.customer = customer;
  }

  getCustomer() {
    let customer = localStorage.getItem(this.localStorageKey);
    this.customer = customer ? JSON.parse(customer) : this.customer;
    return this.customer;
  }

  clearCustomer(){
    localStorage.removeItem(this.localStorageKey)
    this.customer = null;
    window.location.replace("")
  }
}
