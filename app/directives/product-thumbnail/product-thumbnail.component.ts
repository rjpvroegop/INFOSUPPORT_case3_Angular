import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'product-thumbnail',
  templateUrl: 'product-thumbnail.component.html'
})
export class ProductThumbnailComponent {
  @Input() product = {};
}
