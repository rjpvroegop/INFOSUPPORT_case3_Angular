import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ShoppingcartService} from "../../services/shoppingcart.service";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  moduleId: module.id,
  selector: 'shopping-cart',
  templateUrl: 'shoppingcart.component.html',
  styleUrls: ['shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  @Input() shoppingcartview: boolean = true;

  ngOnInit(): void {
    // console.log(this.shoppingcartService.getOrder());
  }

  constructor(public shoppingcartService: ShoppingcartService) {
  }

  addProduct(product: Product){
    this.shoppingcartService.addProduct(product);
  }

  removeProduct(product: Product){
    this.shoppingcartService.removeProduct(product);
  }

  clearProduct(product: Product){
    confirm("Are you sure?") ? this.shoppingcartService.clearProduct(product) : '';
  }

  emptyCart(){
    confirm("Are you sure?") ? this.shoppingcartService.emptyCart() : '';
  }
}
