import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  moduleId: module.id,
  selector: 'product-thumbnail',
  templateUrl: 'product-thumbnail.component.html',
  styleUrls: ['product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product: Product;

  constructor() {

  }

  ngOnInit() {
  }

}
