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
  results: any[] = [];
  searchResults: any[] = [];
  parentNameArray:any=[];

  constructor(private taskService: TaskService,
    private router:Router,
    private route: ActivatedRoute) {}


  //search for autofill in parent
  searchParentOnKeyUp(event) {
		let input = event.target.value;
		if (input.length > 0) {
      this.results =this.searchFromArray( input);
		}
  }
  searchFromArray( input){
    this.parentNameArray=[];
    const observable=this.taskService.search(input,"name");
    observable.subscribe(response => {
     const  lengthOfResponse=Object.keys(response).length;
      if(response!=0){
        for(let i=0;i<lengthOfResponse;i++)
        this.parentNameArray.push(response[i].name);
      }
    })
    return(this.parentNameArray);
  }

  //get task by Id
  getTask(id: any){
      const observable = this.taskService.search(id,'id');
      observable.subscribe(
        (response) => {
          this.taskArray = response;
          this.task = this.taskArray;
          this.task.startdate = this.task.startDate.toString().split('T')[0];
          this.task.enddate = this.task.endDate.toString().split('T')[0];
        },
        (error) => {
          console.log(error);
          Swal.fire("Error!")
        }
      );
  }

//update the task
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
    //displaying task details
    this.route.paramMap.subscribe(parameterMap => {
      let id = parameterMap.get('id');
      this.getTask(id);
    })
  }

}
