import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<nav-header></nav-header>
<catalog-overview></catalog-overview>
`,
})

export class AppComponent  { name = 'Angular'; }
