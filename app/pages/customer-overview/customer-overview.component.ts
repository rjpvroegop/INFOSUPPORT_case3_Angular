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

  ngAfterViewInit(){
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
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
