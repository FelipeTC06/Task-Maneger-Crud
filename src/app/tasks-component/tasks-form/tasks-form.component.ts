import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IformCandeactivate } from 'src/interfaces/iform-candeactivate';
import { TasksServiceService } from 'src/services/tasks-service.service';

@Component({
  selector: 'tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent implements OnInit, IformCandeactivate {

  public form!: FormGroup
  private id?: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private taskService: TasksServiceService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.createTask();
    if (this.id) {
      this.taskService.getTaskById(this.id).subscribe((response) => {
        this.form.patchValue(response)
      })
    }
  }

  public createTask() {
    this.form = this.formBuilder.group({
      task: [null, Validators.required],
      day: [null, Validators.required],
      description: [null, Validators.required]
    })
  }

  public saveTask() {
    const value = this.form.value;
    if (this.id) {
      this.taskService.updateTasks(this.id, value).subscribe({
        error: (e) => console.log(e),
        complete: () => this.cancel()
      })
    } else {
      this.taskService.createTasks(value).subscribe({
        error: (e) => console.log(e),
        complete: () => this.cancel()
      })
    }
  }
  
  public cancel() {
    this.router.navigate(['/tasks-list']);
  }

}
