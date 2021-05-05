import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
const URL='http://localhost:8080/bug/';

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
}
