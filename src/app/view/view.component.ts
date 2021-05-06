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
  search(searchinput:string){
    if(searchinput==null){
      alert("enter value");
    }
    else{
    const observable=this.taskService.search(searchinput);
    observable.subscribe(response => {
      console.log(response);
      if(response==0){
        alert(" task with input value not found");
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
    const observable=this.taskService.getAllTasks();
    observable.subscribe(response =>{
      console.log(response);
      this.taskArray=response;
  })

  }

}
