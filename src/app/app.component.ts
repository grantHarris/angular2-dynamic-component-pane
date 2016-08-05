import { Component } from '@angular/core';
import { MyContainerComponent } from './container/container.component';

@Component({
  selector: 'my-app',
  template: `
  	<my-container [configuration]="layout.configuration"></my-container>
  `,
  directives: [MyContainerComponent]
})
export class AppComponent {
	layout: Object;
	constructor(){
		this.layout = {
			"type": "Container",
			"configuration":{
				"arrangement": "row",
				"children": [{
					"type": "Container",
					"configuration":{
						"arrangement": "col",
						"children": [
							{
								"type": "PieChart",
								"configuration": {
									"data": [1,2,3,4]
								}
							}
						]
					}
				},
			{
					"type": "Container",
					"configuration":{
						"arrangement": "col",
						"children": [
							{
								"type": "BarChart",
								"configuration": {
									"data": [55,66,77,88]
									
								}
							},
												{
								"type": "PieChart",
								"configuration": {
									"data": [99,88,77]

								}
							}
						]
					}
				}]
			}
		};
	}
}