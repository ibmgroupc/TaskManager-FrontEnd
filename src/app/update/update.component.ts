import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {
  task: Task = new Task();
  taskArray: any;
  edit: FormGroup;

  constructor(private taskService: TaskService,
    private router:Router,
    private route: ActivatedRoute) {}

  getTask(name: string){
      const observable = this.taskService.search(name,'name');
      observable.subscribe(
        (response) => {
          this.taskArray = response;
          this.task = this.taskArray[0];
          this.task.startdate = this.task.startDate.toString().split('T')[0];
          this.task.enddate = this.task.endDate.toString().split('T')[0];
          if(this.taskArray[0] == undefined){
            Swal.fire("No such task found!");
          }
        },
        (error) => {
          console.log(error);
          Swal.fire("Error!")
        }
      );
  }

  update(){
    this.task.startDate = new Date(this.task.startdate);
    this.task.endDate = new Date(this.task.enddate);
    const observable = this.taskService.update(this.task, this.task.id);
    observable.subscribe(
      (response) =>{
        Swal.fire("Task updated!");
        this.router.navigate(['/view'])
      },
      (error) => {
        if(error.status != 'OK'){
          Swal.fire("Error! " + error.headers.get("error"));
        }
        else{
        Swal.fire("Error occurred!")
        }
      }
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameterMap => {
      let name = parameterMap.get('name');
      this.getTask(name);
    })
  }

}
