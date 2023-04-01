import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksServiceService } from 'src/services/tasks-service.service';

@Component({
  selector: 'tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent implements OnInit {

  public taskForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private taskService: TasksServiceService
  ) { }

  public ngOnInit(): void {
    this.createTask()
  }

  public createTask() {
    this.taskForm = this.formBuilder.group({
      task: [null, Validators.required],
      day: [null, Validators.required],
      description: [null, Validators.required]
    })
  }

  public saveTask() {
    const value = this.taskForm.value;
    this.taskService.createTasks(value).subscribe({
      error: (e) => console.log(e),
      complete: () => this.cancel()
    })
  }

  public cancel(){
    this.router.navigate([''])
  }

}
