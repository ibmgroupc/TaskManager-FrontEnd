import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private taskService:TaskService) { }
  task:Task=new Task();
  taskArray:any=[];
  //seacrh task by name,parent,priority,start date or end date
  search(){
    if(this.task.searchField==null){
      alert("Select a field to search by");
    }
    else{
      let value;
      let searchField;
      switch(this.task.searchField){
        case "Name":value=this.task.name;
                     searchField="name";
                     break;
        case "Parent":value=this.task.parent;
                     searchField="parent";
                     break;
        case "Priority":value=this.task.priority;
                     searchField="priority";
                     break;
        case "StartDate":value=this.task.startDate;
                     searchField="startDate";
                     break;
        case "EndDate":value=this.task.endDate;
                     searchField="endDate";
                     break;
        default:break;
      }
    const observable=this.taskService.search(value,searchField);
    observable.subscribe(response => {
      console.log(response);
      if(response==0){
        alert("Task with input value not found");
      }
      this.taskArray=response;
    },error=>{
      console.log(error);
      alert("error:");
     }
    )
  }
  }
  ngOnInit(): void {
    //display all tasks on page load
    const observable=this.taskService.getAllTasks();
    observable.subscribe(response =>{
      console.log(response);
      this.taskArray=response;
  })

  }

}
