import { TaskDeactivateGuard } from './../guards/task-deactivate.guard';
import { AuthGuard } from './../guards/auth-guard.guard';
import { AuthService } from './../services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksFormComponent } from './tasks-component/tasks-form/tasks-form.component';
import { TasksListComponent } from './tasks-component/tasks-list/tasks-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login-component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TasksFormComponent,
    DashboardComponent,
    NavbarComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
     
  ],
  providers: [AuthService, AuthGuard,TaskDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
