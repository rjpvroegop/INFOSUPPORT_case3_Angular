import {Component, OnInit} from "@angular/core";
import {Order} from "../../models/order";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
    moduleId: module.id,
    selector: 'invoice-view',
    templateUrl: 'invoice.component.html',
    styleUrls: ['invoice.component.css']
})
export class InvoiceComponent implements OnInit {
    @Input() order: Order;

    constructor() {
        // here your order is undefined
    }

    // BEGIN TEST DATA

    orderTest = {
        name: "Firstname Lastname",
        street:  "StreetName 11",
        zip: "1234 AB",
        city: "City",
        country: "Country",
        email: "mail@mail.com",
        orderdate: "2017-12-19",
        ordernumber: "ORD-12345",
        custId : "CUST-12345",
        subtotal: 100,
        tax: 21,
        total: 121
    };

    products = [{
        name: "prod1",
        price: 15,
        amount: 4,
        subtotal: 60,
        prodcode: "ABCD"
    },{
        name: "prod2",
        price: "20",
        amount: 2,
        subtotal: 40,
        prodcode: "EFGH"
    }];

    // END TEST DATA

    ngOnInit() {
        // here your order is set
    }
}
