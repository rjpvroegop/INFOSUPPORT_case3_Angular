import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'nav-header',
  templateUrl: 'nav-header.component.html'
})
export class NavHeaderComponent {
  name = 'Angular';
  @Input() encouragement;
}
