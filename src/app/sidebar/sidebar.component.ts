import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  todaydate = new Date();
  visibleSidebar1;

  constructor(private _userdata : UserdataService) {
    setInterval(() => {
      this.todaydate = new Date();
      }, 1);
      // setTimeout(()=>{ this.todaydate = new Date(); }, 3000);
  }

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
