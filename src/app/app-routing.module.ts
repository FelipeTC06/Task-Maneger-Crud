import { TaskDeactivateGuard } from './../guards/task-deactivate.guard';
import { AuthGuard } from './../guards/auth-guard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login-component/login/login.component';
import { TasksFormComponent } from './tasks-component/tasks-form/tasks-form.component';
import { TasksListComponent } from './tasks-component/tasks-list/tasks-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'tasks-list', component: TasksListComponent, canActivate: [AuthGuard] },
  { path: 'tasks-form', component: TasksFormComponent, canActivate: [AuthGuard] },
  { path: 'tasks-form/:id', component: TasksFormComponent, canActivate: [AuthGuard], canDeactivate: [TaskDeactivateGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
