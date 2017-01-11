import {Component} from '@angular/core';
import {Customer} from "../../model/Customer";
import {materialize} from "rxjs/operator/materialize";
@Component({
    moduleId: module.id,
    selector: 'customer-overview',
    templateUrl: 'customer-overview.component.html'
})
export class CustomerOverviewComponent {
    title = "Overview Of Customers";
    customer:Customer = {
        firstName: "Yusuf",
        addresses: [{street: "Sesamstraat 1"}, {street: "Sesamstraat 2"}, {street: "Sesamstraat 3"}, {street: "Sesamstraat 4"}]
    };

    clicked() {
        console.log(this.customer);
    }

    ngAfterViewInit() {
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
