import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  task: Task = new Task();
  taskArray: any;

  constructor(private taskService: TaskService) {}

  getTask(){
    if(this.task.name){
      const observable = this.taskService.getTasksByName(this.task.name);
      observable.subscribe(
        (response) => {
          this.taskArray = response;
          this.task = this.taskArray[0];
          if(this.taskArray[0] == undefined){
            alert("No such task found!");
          }
        },
        (error) => {
          console.log(error);
          alert("Error!")
        }
      );
    }
    else{
      alert("Please enter task name.");
    }
  }

  update(){
    const observable = this.taskService.update(this.task, this.task.id);
    observable.subscribe(
      (response) =>{
        alert("Task updated!");
      },
      (error) => {
        console.log(error);
        alert("Error occurred!")
      }
    );
  }

  ngOnInit(): void {
  }

}
