import {Component, OnInit} from '@angular/core';
import {Order} from "../../models/order";

@Component({
  moduleId: module.id,
  selector: 'order-overview',
  templateUrl: 'order.component.html',
  styleUrls: ['order.component.css']
})
export class OrderComponent implements OnInit {
  order: Order = new Order();

  constructor() {
    this.createDummyOrder();
  }

  ngOnInit() {
  }

  createDummyOrder() {
  }
}
