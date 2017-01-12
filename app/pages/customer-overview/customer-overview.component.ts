import {Component} from "@angular/core";
import {Account} from "../../model/Account";
import {Http} from "@angular/http";
import {ActivatedRoute} from "@angular/router";

import {Component} from '@angular/core';
import {Customer} from "../../model/Customer";
import {materialize} from "rxjs/operator/materialize";
import {AccountService} from "../../service/account.service";
@Component({
  moduleId: module.id,
  selector: 'customer-overview',
  templateUrl: 'customer-overview.component.html',
  providers: [AccountService]
})

export class CustomerOverviewComponent {
  title = "Overview Of Customers";

  account: any = {
    customer: {
      addresses: []
    }
  };

  newUser = true;

  sub: any;

  constructor(private http: Http, private route: ActivatedRoute, private accountService: AccountService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];

      console.info(id);

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
    this.accountService.getAccount(id)
      .then(account => this.account = account);
  }

  updateAccount() {
    this.accountService.updateCustomer(this.account.customer);
  }

  newAccount() {
    this.accountService.newAccount(this.account);
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
