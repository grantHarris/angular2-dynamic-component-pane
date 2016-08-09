import { Component } from '@angular/core';


@Component({
  selector: 'my-task-list',
  inputs: ['configuration'],
  directives: [],
  template: `
  	<div ngClass="{{configuration.class}}">
  		<my-loader [component]="child" *ngFor="let child of configuration.children"></my-loader>
  	</div>
  `
})
export class MyTaskListComponent {

	constructor(){
	}
}