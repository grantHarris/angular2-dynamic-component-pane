import { Component } from '@angular/core';
import { MyLoaderComponent } from './loader.component'


@Component({
  selector: 'my-container',
  inputs: ['configuration'],
  directives: [MyContainerComponent, MyLoaderComponent],
  template: `
  	<div *ngIf="configuration.arrangement === 'row'" class="row">
  		<my-loader [component]="child" *ngFor="let child of configuration.children"></my-loader>
  	</div>
  	<div *ngIf="configuration.arrangement === 'col'" class="col-xs-6">
  		<my-loader [component]="child" *ngFor="let child of configuration.children"></my-loader>
  	</div>
  `
})
export class MyContainerComponent {

	constructor(){
	}
}