import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private taskService:TaskService, private router: Router) { }
  task:Task=new Task();
  taskArray:any=[];
  //seacrh task by name,parent,priority,start date or end date
  search(){
    if(this.task.searchField==null || this.task.searchField=="Display all tasks"){
      const observable=this.taskService.getAllTasks();
      observable.subscribe(response =>{
      console.log(response);
      this.taskArray=response;
  })
    }
    else{
      let value=null;
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
        Swal.fire("Task with input value not found");
      }
      this.taskArray=response;
    },error=>{
      console.log(error);
      Swal.fire("Error");
     }
    )
  }
  }
  //delete task
  deleteTask(taskId:string,index:number){
    Swal.fire({
      title: 'Are you sure want to delete task?',
      text: 'You will not be able to recover this task!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes,delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        const observable=this.taskService.deleteTask(taskId);
        observable.subscribe(response => {
          this.taskArray.splice(index,1);
      } )
        Swal.fire(
          'Deleted!',
          'Task has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Task is not deleted :)',
          'error'
        )
      }
    })

  }

//navigating to update page
  edit(id: any){
    this.router.navigate(['/update', id]);
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
