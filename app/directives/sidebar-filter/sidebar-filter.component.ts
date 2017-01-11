import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sidebar-filter',
  templateUrl: 'sidebar-filter.component.html'
})
export class SidebarFilterComponent {
  @Input() product = {};
}
