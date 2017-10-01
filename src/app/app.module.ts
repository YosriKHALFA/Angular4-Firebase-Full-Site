import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { FormsModule} from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages' ; 
import { EmployeeService } from './services/employee.service';
import { AuthenService } from './services/authen.service';
import { SettingsService } from './services/settings.service';

import { AuthGuard } from './guards/auth.guards';
import { RegisterGuard } from './guards/register.guards';



var fireConfig = {
  apiKey: "AIzaSyCZWZr9ELJmNj8dAVok-tllmkXGEOy6Ztg",
  authDomain: "angular4-crud.firebaseapp.com",
  databaseURL: "https://angular4-crud.firebaseio.com",
  storageBucket: "angular4-crud.appspot.com",
  messagingSenderId: "892370073702"
};

const appRouter : Routes =[
  {path:'',component:DashboardComponent , canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent , canActivate:[RegisterGuard]},
  {path:'add-Employee',component:AddEmployeeComponent , canActivate:[AuthGuard]},
  {path:'employee/:id',component:EmployeeInfoComponent, canActivate:[AuthGuard]},
  {path:'edit-employee/:id',component:EditEmployeeComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'settings',component:SettingsComponent , canActivate:[AuthGuard]},
  {path:'**',component:PageNotFoundComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeInfoComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    SettingsComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ListEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule,
    FormsModule,
    RouterModule.forRoot(appRouter),
    AngularFireModule.initializeApp(fireConfig)
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth,
    EmployeeService,
    AuthenService,
    SettingsService,
    AuthGuard,
    RegisterGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
