import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';
// import { TYPE } from '../TYPE';
// import { STATUS } from '../STATUS';
// import { OCCURRENCE  } from '../OCCURRENCE';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(private taskService: TaskService,
    private route:ActivatedRoute) { }
  task:Task=new Task();
  taskArray:any=[];
  save(){

    const promise=this.taskService.save(this.task);
    promise.subscribe(response=>{
      console.log(response);
      alert("Task added");
      this.taskArray.push(Object.assign({},this.task));
    },
    error=>{
      console.log(error);
    })
  }

  ngOnInit(): void {
  }

}
