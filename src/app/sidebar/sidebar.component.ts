import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  visibleSidebar1;

  constructor(private _userdata:UserdataService) { }

  ngOnInit() {
  }
  mouseEnter(){
    console.log("mouse working");
    this.visibleSidebar1 = true;
 }
 onLogOut(){
  this._userdata.logout();
}
isLoggedIn(){
  return this._userdata.isLoggedIn;
}
}
