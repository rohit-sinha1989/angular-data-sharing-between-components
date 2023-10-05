import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  @Input() inputFromParent = ''; // Receiving from Parnet to Child

  sendingToParent = 'This is Rohit from Child Component'

  @Output() sendingDataToParent = new EventEmitter(); // Sending Child to Parent

  constructor() { }
 
  ngOnInit(): void {
  }
  // Sending Data from Child to Parent
  postDataToParent(){ 
    this.sendingDataToParent.emit(this.sendingToParent);
  }

}
