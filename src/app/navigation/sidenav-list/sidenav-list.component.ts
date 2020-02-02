import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() public sidenavClose = new EventEmitter();

  constructor() { }

  toggleActive:boolean = false;

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
    this.toggleActive = !this.toggleActive;
    
    console.log('Clicked');
  }

}
