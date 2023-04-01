import { TasksFormComponent } from './tasksComponets/tasks-form/tasks-form.component';
import { TasksListComponent } from './tasksComponets/tasks-list/tasks-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TasksListComponent },
  { path: 'tasks-form', component: TasksFormComponent },
  { path: 'tasks-form/:id', component: TasksFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
