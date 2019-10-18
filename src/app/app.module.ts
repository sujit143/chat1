import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpComponent } from './emp/emp.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PipeComponent } from './pipe/pipe.component';
import { ReversePipe } from './reverse.pipe';
import {TableModule} from 'primeng/table';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {ContextMenuModule} from 'primeng/primeng';
import {CaptchaModule} from 'primeng/captcha';
import { LoginComponent } from './login/login.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DialogModule } from 'primeng/primeng';
// import {NgbdCarouselBasicModule} from './app/carousel-basic.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgtableComponent } from './ngtable/ngtable.component';
import { ContextComponent } from './context/context.component';
// import { NgbdSortableHeader } from './sortable.directive';
// import { NgbdTableComplete } from './table-complete';
import {MatMenuModule, MatTableModule } from '@angular/material';
import { MdbtableComponent } from './mdbtable/mdbtable.component';
import { ToastrModule } from 'ngx-toastr';
import { MDBBootstrapModule } from 'angular-bootstrap-md';





@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmpComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    PipeComponent,
    ReversePipe,
    LoginComponent,
    NgtableComponent,
    ContextComponent,
    MdbtableComponent
  ],

  imports: [
    BrowserModule,
    MatToolbarModule,
    SidebarModule,
    BrowserAnimationsModule,
    routing,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    TableModule,
    ToastModule,
    ContextMenuModule,
    CaptchaModule,
    ReactiveFormsModule,
    CarouselModule,
    DialogModule,
    NgbModule,
    MatMenuModule,
    MatTableModule,
    ToastrModule.forRoot(),
    MDBBootstrapModule
    // NgbdSortableHeader,
    // NgbdTableComplete
    // NgbdCarouselBasicModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
