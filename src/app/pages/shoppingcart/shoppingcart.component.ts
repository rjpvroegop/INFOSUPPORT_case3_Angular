import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'shopping-cart',
  templateUrl: 'shoppingcart.component.html',
  styleUrls: ['shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  ngOnInit(): void {
    $('[data-toggle="popover"]').popover()
  }

  constructor() {
  }
}
