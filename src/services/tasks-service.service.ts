import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {

  private tasksURL = environment.taskURL

  constructor(
    private http: HttpClient
  ) { }

  public getTasks() {
    return this.http.get(`${this.tasksURL}`)
  }

  public getTaskById(id: number) {
    return this.http.get(`${this.tasksURL}/${id}`)
  }

  public createTasks(value: any) {
    return this.http.post(`${this.tasksURL}`, value)
  }

  public updateTasks(id: number, value: any) {
    return this.http.put(`${this.tasksURL}/${id}`, value)
  }

  public deleteTask(id: number) {
    return this.http.delete(`${this.tasksURL}/${id}`)
  }

}
