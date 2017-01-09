import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'catalog-overview',
  templateUrl: 'catalog-overview.component.html'
})
export class CatalogOverviewComponent  {
  products = [
    {
      "title": "Product 1",
      "description": "Beschrijving van het eerste product"
    },
    {
      "title": "Product 2",
      "description": "Beschrijving van het tweede product"
    },
    {
      "title": "Product 3",
      "description": "Beschrijving van het product"
    },
    {
      "title": "Product 4",
      "description": "Beschrijving van het product"
    },
    {
      "title": "Product 5",
      "description": "Beschrijving van het product"
    },
    {
      "title": "Product 6",
      "description": "Beschrijving van het product"
    }
  ]
}
