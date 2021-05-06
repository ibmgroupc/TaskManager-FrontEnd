import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
const URL='http://localhost:8085/task/';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }
  save(task:Task){
    return this.http.post(URL, task,{
      headers:{ "content-type":'application/json' },
      responseType: "text"
    });
  }
  search(value:string){
    return this.http.get(URL+'name/'+value)
  }
  update(task: Task, id: any) {
    return this.http.put(URL + id, task, {
      headers: { 'content-type': 'application/json' },
    });
  }
}
