import {Component} from "@angular/core";
import {Account} from "../../model/Account";
import {Http} from "@angular/http";

import {Component} from '@angular/core';
import {Customer} from "../../model/Customer";
import {materialize} from "rxjs/operator/materialize";
@Component({
  moduleId: module.id,
  selector: 'customer-overview',
  templateUrl: 'customer-overview.component.html'
})

export class CustomerOverviewComponent {
  accountUrl = "http://localhost:10001/bsklantbeheer/accounts/1";
  saveAccountUrl = "http://localhost:10001/bsklantbeheer/customers/editcustomer";
  title = "Overview Of Customers";

  account = {
    customer: {}
  };

  constructor(private http: Http) {
    this.getAccount();
  }

  getAccount() {
    this.http.get(this.accountUrl)
      .subscribe(
        this.extractAccount.bind(this)
      );
  }

  extractAccount(res) {
    let body = res.json();
    this.account = <Account> body;
    console.log(body);
  }

  submitNewAccount(){
    this.http.put(this.saveAccountUrl, this.account.customer).subscribe(console.log);
  }

  clicked() {
    console.log(this.account);
  }

  ngAfterViewInit() {

    Materialize.updateTextFields();
    $('.collapsible').collapsible();

        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });
        setTimeout(()=> {
            Materialize.updateTextFields();
        }, 0)
    }
}
