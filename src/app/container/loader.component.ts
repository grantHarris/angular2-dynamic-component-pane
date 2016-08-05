import { Component, DynamicComponentLoader, ViewContainerRef } from '@angular/core';

import { MyContainerComponent } from './container.component'
import { MyPlaceholderComponent } from './placeholder.component'

@Component({
  selector: 'my-loader',
  inputs: ['component'],
  template: ``
})

export class MyLoaderComponent {

  public component: Object;
  private dcl: DynamicComponentLoader;
  private viewContainerRef: ViewContainerRef;


  constructor(dcl: DynamicComponentLoader, viewContainerRef: ViewContainerRef) {
    this.dcl = dcl;
    this.viewContainerRef = viewContainerRef;
  }

  ngAfterContentInit(){
    // Replace with some sort of service
    let mappings = {
      'Container': MyContainerComponent,
      'PieChart': MyPlaceholderComponent,
      'BarChart': MyPlaceholderComponent
    };

    this.dcl.loadNextToLocation(mappings[this.component['type']], this.viewContainerRef).then(componentRef=> {
      componentRef.instance.configuration = this.component['configuration'];
    });

  }

}