import { Component, ViewChild } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-data-sharing-between-components';
//Method: 1.
  forParent = 'This is for Parent';
  forChild = 'This is for Child from Parent';
//Method: 2.
  getDataFromChild(e:any)
  {
    console.log(e);
    this.forParent = e;
  }

  //Method: 3.

  @ViewChild(ChildComponentComponent) child:any;
  buttonClick()
  {
    this.forParent = this.child.sendingToParent;
  } 
}
