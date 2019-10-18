import { Routes,RouterModule } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PipeComponent } from './pipe/pipe.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { NgtableComponent } from './ngtable/ngtable.component';
import { ContextComponent } from './context/context.component';
import { MdbtableComponent } from './mdbtable/mdbtable.component';


const arr : Routes=[

  {path:'home',component:SidebarComponent},
  {path:'nav',component:NavComponent},
  {path:'empdetail',component:EmpComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'pipe',component:PipeComponent},
  {path:'',component:LoginComponent},
  {path:'ngtable',component:NgtableComponent},
  {path:'context',component:ContextComponent},
  {path:'mdbtable',component:MdbtableComponent}

];

export const routing=RouterModule.forRoot(arr);
