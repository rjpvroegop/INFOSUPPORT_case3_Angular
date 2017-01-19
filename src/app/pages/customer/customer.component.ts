import {Component} from "@angular/core";
import {AccountService} from "../../services/account.service";
import {ActivatedRoute} from "@angular/router";
import {Account} from "../../models/account";
import {Customer} from "../../models/customer";
import {Address} from "../../models/address";
import {popupMessage} from "../../../assets/js/popup";

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

      console.log(params['id'])
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

  private addAddress() {
    let address = new Address;
    address.zip = "Zip Code"
    address.street = "Street"
    address.city = "City"
    this.account.customer.addresses.push(address)
  }

  private registerAccount(account: Account, event) {
    let id : number;
    event.stopPropagation();
    event.preventDefault();
    this.accountService.newAccount(account).then(function (data :Account) {
      id = data.id;
      console.log('ID ' + id)
      new popupMessage('Account Created', 'Welcome ' + account.userName, 'success');
      window.location.replace('/customer/' + id);
    });
  }

  private saveAccountInfo(account: Account) {
    event.stopPropagation();
    event.preventDefault();
    this.accountService.updateCustomer(account.customer).then(function (data:Account) {
      new popupMessage('Account Updated', 'Changed Customer Info', 'success');
    });
  }

  myDatePickerOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'yyyy-mm-dd',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    height: '34px',
    width: '260px',
    editableDateField : false,
    disableSince : {year: 2017, month: 1, day: 17},
    inline: false,
    selectionTxtFontSize: '16px'
  };

  onDateChanged(event:any) {
    this.account.customer.birthDate = event.formatted;
    console.log(this.account.customer)
  }
}
