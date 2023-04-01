import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TasksServiceService } from 'src/services/tasks-service.service';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  public tasks!: any[]

  constructor(
    private taskservice: TasksServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  public getTasks() {
    this.taskservice.getTasks().subscribe((result: any) => {
      this.tasks = result;
    })
  }

  public editTasks(id: number) {
    this.router.navigate(['tasks-form', id]);
  }

  public deleteTask(id: number) {
    this.taskservice.deleteTask(id).subscribe(
      {
        error: (e) => console.log(e),
        complete: () => this.getTasks()
      }
    )
  }

}
