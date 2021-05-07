import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(private taskService: TaskService,
    private route:ActivatedRoute) { }
    @Input() task: Task = new Task();
  taskArray:any=[];
  //create task
  save(){
    const promise=this.taskService.save(this.task);
    promise.subscribe(response=>{
      console.log(response);
      Swal.fire("Task Created");
      this.taskArray.push(Object.assign({},this.task));
    },
    error=>{
      Swal.fire("Error");
    })
  }
  ngOnInit(): void {
  }
}
