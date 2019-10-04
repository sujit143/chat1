import { Routes,RouterModule } from "@angular/router";
import { EmpComponent } from './emp/emp.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const arr : Routes=[

  {path:'',component:SidebarComponent},
  // {path:'',component:NavComponent},
  {path:'empdetail',component:EmpComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}

];

export const routing=RouterModule.forRoot(arr);
