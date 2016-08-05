import { Component } from '@angular/core';


@Component({
  selector: 'my-placeholder',
  inputs: ['configuration'],
  template: `
    This is a simple placeholder {{configuration | json}}
  `
})
export class MyPlaceholderComponent {

	constructor(){

	}

}