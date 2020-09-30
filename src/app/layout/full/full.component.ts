import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit,OnDestroy {

  collapedSideBar: boolean;
  subscribeAlert:Subscription;
  messageTitle:string;
  messageType:string;
  messageText:string;
  constructor() { }

  ngOnInit() {
  
   }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }

ngOnDestroy(){
  this.subscribeAlert.unsubscribe();
}
  
}