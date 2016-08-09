import { Component } from '@angular/core';


@Component({
  selector: 'my-task-types',
  inputs: ['configuration'],
  directives: [],
  template: `
  	<div *ngFor = "filter in filters">
  		<h3>{{filter.name}}</h3>
  	</div>
  `
})
export class MyTaskTypesComponent {
	public filters: Object;
	constructor(){

		this.filters = [{
		    "id": "566f732e-5dbf-11e6-9524-0242ac110002",
		    "resourceType": "Task",
		    "name": "My Tasks",
		    "owner": "demo",
		    "query": {
		        "assigneeExpression": "${currentUser()}",
		        "taskVariables": [],
		        "processVariables": [],
		        "caseInstanceVariables": []
		    },
		    "properties": {
		        "variables": [{
		            "name": "amount",
		            "label": "Invoice Amount"
		        }, {
		            "name": "invoiceNumber",
		            "label": "Invoice Number"
		        }, {
		            "name": "creditor",
		            "label": "Creditor"
		        }, {
		            "name": "approver",
		            "label": "Approver"
		        }],
		        "description": "Tasks assigned to me",
		        "priority": -10
		    }
		}, {
		    "id": "56720b40-5dbf-11e6-9524-0242ac110002",
		    "resourceType": "Task",
		    "name": "My Group Tasks",
		    "owner": "demo",
		    "query": {
		        "unassigned": true,
		        "candidateGroupsExpression": "${currentUserGroups()}",
		        "taskVariables": [],
		        "processVariables": [],
		        "caseInstanceVariables": []
		    },
		    "properties": {
		        "variables": [{
		            "name": "amount",
		            "label": "Invoice Amount"
		        }, {
		            "name": "invoiceNumber",
		            "label": "Invoice Number"
		        }, {
		            "name": "creditor",
		            "label": "Creditor"
		        }, {
		            "name": "approver",
		            "label": "Approver"
		        }],
		        "description": "Tasks assigned to my Groups",
		        "priority": -5
		    }
		}, {
		    "id": "5672ce94-5dbf-11e6-9524-0242ac110002",
		    "resourceType": "Task",
		    "name": "Accounting",
		    "owner": "demo",
		    "query": {
		        "unassigned": true,
		        "candidateGroups": ["accounting"],
		        "taskVariables": [],
		        "processVariables": [],
		        "caseInstanceVariables": []
		    },
		    "properties": {
		        "variables": [{
		            "name": "amount",
		            "label": "Invoice Amount"
		        }, {
		            "name": "invoiceNumber",
		            "label": "Invoice Number"
		        }, {
		            "name": "creditor",
		            "label": "Creditor"
		        }, {
		            "name": "approver",
		            "label": "Approver"
		        }],
		        "description": "Tasks for Group Accounting",
		        "priority": -3
		    }
		}, {
		    "id": "56731cb7-5dbf-11e6-9524-0242ac110002",
		    "resourceType": "Task",
		    "name": "John's Tasks",
		    "owner": "demo",
		    "query": {
		        "assignee": "john",
		        "taskVariables": [],
		        "processVariables": [],
		        "caseInstanceVariables": []
		    },
		    "properties": {
		        "variables": [{
		            "name": "amount",
		            "label": "Invoice Amount"
		        }, {
		            "name": "invoiceNumber",
		            "label": "Invoice Number"
		        }, {
		            "name": "creditor",
		            "label": "Creditor"
		        }, {
		            "name": "approver",
		            "label": "Approver"
		        }],
		        "description": "Tasks assigned to John",
		        "priority": -1
		    }
		}, {
		    "id": "567343c9-5dbf-11e6-9524-0242ac110002",
		    "resourceType": "Task",
		    "name": "Mary's Tasks",
		    "owner": "demo",
		    "query": {
		        "assignee": "mary",
		        "taskVariables": [],
		        "processVariables": [],
		        "caseInstanceVariables": []
		    },
		    "properties": {
		        "variables": [{
		            "name": "amount",
		            "label": "Invoice Amount"
		        }, {
		            "name": "invoiceNumber",
		            "label": "Invoice Number"
		        }, {
		            "name": "creditor",
		            "label": "Creditor"
		        }, {
		            "name": "approver",
		            "label": "Approver"
		        }],
		        "description": "Tasks assigned to Mary",
		        "priority": -1
		    }
		}, {
		    "id": "567343cb-5dbf-11e6-9524-0242ac110002",
		    "resourceType": "Task",
		    "name": "Peter's Tasks",
		    "owner": "demo",
		    "query": {
		        "assignee": "peter",
		        "taskVariables": [],
		        "processVariables": [],
		        "caseInstanceVariables": []
		    },
		    "properties": {
		        "variables": [{
		            "name": "amount",
		            "label": "Invoice Amount"
		        }, {
		            "name": "invoiceNumber",
		            "label": "Invoice Number"
		        }, {
		            "name": "creditor",
		            "label": "Creditor"
		        }, {
		            "name": "approver",
		            "label": "Approver"
		        }],
		        "description": "Tasks assigned to Peter",
		        "priority": -1
		    }
		}, {
		    "id": "56736add-5dbf-11e6-9524-0242ac110002",
		    "resourceType": "Task",
		    "name": "All Tasks",
		    "owner": "demo",
		    "query": {
		        "taskVariables": [],
		        "processVariables": [],
		        "caseInstanceVariables": []
		    },
		    "properties": {
		        "variables": [{
		            "name": "amount",
		            "label": "Invoice Amount"
		        }, {
		            "name": "invoiceNumber",
		            "label": "Invoice Number"
		        }, {
		            "name": "creditor",
		            "label": "Creditor"
		        }, {
		            "name": "approver",
		            "label": "Approver"
		        }],
		        "description": "All Tasks - Not recommended to be used in production :)",
		        "priority": 10
		    }
		}];
	}
}