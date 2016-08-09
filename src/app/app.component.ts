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
		    "configuration": {
		        "class": "row",
		        "children": [{
		            "type": "Container",
		            "configuration": {
		                "class": "col-xs-2",
		                "children": [{
		                    "type": "TaskTypes",
		                    "configuration": {
		                        "data": "Task types here"

		                    }
		                }]
		            }
		        },{
		            "type": "Container",
		            "configuration": {
		                "class": "col-xs-2",
		                "children": [{
		                    "type": "TaskList",
		                    "configuration": {
		                        "data": "Task list here"

		                    }
		                }]
		            }
		        },{
		            "type": "Container",
		            "configuration": {
		                "class": "col-xs-8",
		                "children": [{
		                    "type": "TaskItem",
		                    "configuration": {
		                        "data": "Task item here"

		                    }
		                }]
		            }
		        }]
		    }
		};
	}
}