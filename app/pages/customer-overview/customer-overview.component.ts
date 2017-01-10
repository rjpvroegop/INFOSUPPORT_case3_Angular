import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector : 'customer-overview',
  templateUrl : 'customer-overview.component.html'
})
export class CustomerOverviewComponent {
  title = "Overview Of Customers";
  customer = new Customer();

  clicked(){
    console.log(this.customer);
  }
}


class Customer {
  id : number;
  firstName : string;
  lastName : string;
  birthDate : any;
  address : any;
  credit : number;
  email : string;
  phone : string
}
