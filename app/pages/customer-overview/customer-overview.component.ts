import {Component} from "@angular/core";
import {Account} from "../../model/Account";
import {Http} from "@angular/http";
import {ActivatedRoute} from "@angular/router";

import {Component} from '@angular/core';
import {Customer} from "../../model/Customer";
import {materialize} from "rxjs/operator/materialize";
import {Address} from "../../model/Address";
@Component({
  moduleId: module.id,
  selector: 'customer-overview',
  templateUrl: 'customer-overview.component.html'
})

export class CustomerOverviewComponent {
  accountUrl = "http://localhost:10001/bsklantbeheer/accounts/";
  saveAccountUrl = "http://localhost:10001/bsklantbeheer/customers/editcustomer";
  newAccountUrl = "http://localhost:10001/bsklantbeheer/accounts/newaccount";
  title = "Overview Of Customers";

  account: any = {
    customer: {
      addresses: []
    }
  };

  newUser = true;

  sub: any;

  constructor(private http: Http, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];

      if (id != undefined) {
        this.newUser = false;
        this.getAccount(id);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getAccount(id: string) {
    this.http.get(this.accountUrl + id)
      .subscribe(
        this.extractAccount.bind(this)
      );
  }

  extractAccount(res: any) {
    let body = res.json();
    this.account = <Account> body;
    console.log(body);
  }

  updateAccount() {
    this.http.put(this.saveAccountUrl, this.account.customer).subscribe(console.log);
  }

  newAccount() {
    this.account.id = undefined;
    this.account.customer.id = undefined;
    this.http.post(this.newAccountUrl, this.account).subscribe(console.log);
  }

  addAddress() {
    this.account.customer.addresses.push(new Address)
  }

  clicked() {
    console.log(this.account);
  }

  ngAfterViewInit() {

    Materialize.updateTextFields();
    $('.collapsible').collapsible();

        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year
            format: 'yyyy-mm-dd'
        });
        setTimeout(()=> {
            Materialize.updateTextFields();
        }, 0)
    }
}
