import {Component, ComponentResolver, ComponentFactory, ComponentRef, ViewContainerRef} from '@angular/core'
import { MyContainerComponent } from './container.component'
import { MyPlaceholderComponent } from './placeholder.component'

@Component({
  selector: 'my-loader',
  inputs: ['component'],
  template: ``
})

export class MyLoaderComponent {

  public component: Object;
  private componentRef:ComponentRef<any>;
  private isViewInitialized:boolean = false;

  constructor(private viewContainerRef: ViewContainerRef, private resolver: ComponentResolver) {}
  
  updateComponent(){
    if(!this.isViewInitialized) {
      return;
    }

    if(this.componentRef) {
      this.componentRef.destroy();
    }

    // Replace with some sort of service
    let mappings = {
      'Container': MyContainerComponent,
      'PieChart': MyPlaceholderComponent,
      'BarChart': MyPlaceholderComponent
    };

     this.resolver.resolveComponent(mappings[this.component['type']]).then((factory:ComponentFactory<any>) => {
      this.componentRef = this.viewContainerRef.createComponent(factory)
      this.componentRef.instance.configuration = this.component['configuration'];
    });
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();  
  }

  ngOnDestroy() {
    if(this.componentRef) {
      this.componentRef.destroy();
    }    
  }
  
}