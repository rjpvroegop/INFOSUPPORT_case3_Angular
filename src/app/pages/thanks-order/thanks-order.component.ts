import {Component, OnInit} from "@angular/core";
import {Input} from "@angular/core/src/metadata/directives";
import {Order} from "../../models/order";

@Component({
  selector: 'thank-you-order',
  templateUrl: './thanks-order.component.html',
  styleUrls: ['./thanks-order.component.css']
})
export class ThanksOrderComponent implements OnInit {
  @Input() order:Order;
  constructor() { }

  ngOnInit() {
  }
}
