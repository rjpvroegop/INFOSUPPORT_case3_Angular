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

    ngOnInit() {
        // here your order is set
      console.log(this.order);
    }
}
