import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HeaderLoginComponent } from './common/header_login/index';
import { HeaderMainComponent } from './common/header_main/index';
import { FooterMainComponent } from './common/footer_main/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import {
  AlertService,
  AuthenticationService,
  UserService,
} from './_services/index';
import { ItemTypeService } from './_services/ItemType/index';
import { ItemService } from './_services/Item/index';
import { ItemListService } from './_services/ItemList/index';
import { FacilityService } from './_services/Facility/index';
import { LocationService } from './_services/Location/index';
import { EmployeeService } from './_services/Employee/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { ForgotPasswordComponent } from './login/forgotPassword/index';

// TODO: create new modules to handle things specific to the dashboard and the login

import { DashboardComponent } from './dashboard/index';
import { ItemListComponent } from './dashboard/itemList/index';
import { ItemTypeListComponent } from './dashboard/itemTypeList/index';
import { NewItemModalComponent } from './dashboard/newItemModal/index';
import { NewItemTypeModalComponent } from './dashboard/newItemTypeModal/index';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    HeaderLoginComponent,
    HeaderMainComponent,
    FooterMainComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ItemListComponent,
    ItemTypeListComponent,
    NewItemModalComponent,
    NewItemTypeModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    ItemTypeService,
    FacilityService,
    ItemService,
    LocationService,
    EmployeeService,
    ItemListService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
