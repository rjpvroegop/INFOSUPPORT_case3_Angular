import { Component } from '@angular/core';
import {Customer} from "../../model/Customer";
import {materialize} from "rxjs/operator/materialize";
@Component({
  moduleId: module.id,
  selector : 'customer-overview',
  templateUrl : 'customer-overview.component.html'
})
export class CustomerOverviewComponent {
  title = "Overview Of Customers";
  customer : Customer = {
    firstName : "Yusuf",
    addresses : [{street : "Sesamstraat 1"}, {street : "Sesamstraat 2"}, {street : "Sesamstraat 3"}, {street : "Sesamstraat 4"}]
  };

  ngAfterViewInit(){
    Materialize.updateTextFields();
    $('.collapsible').collapsible();
  }

  clicked(){
    console.log(this.customer);
  }
}
