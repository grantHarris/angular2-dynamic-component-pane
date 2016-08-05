import { Component } from '@angular/core';
import { MyLoaderComponent } from './loader.component'


@Component({
  selector: 'my-container',
  inputs: ['configuration'],
  directives: [MyContainerComponent, MyLoaderComponent],
  template: `
  	<div ngClass="{{configuration.class}}">
  		<my-loader [component]="child" *ngFor="let child of configuration.children"></my-loader>
  	</div>
  `
})
export class MyContainerComponent {

	constructor(){
	}
}