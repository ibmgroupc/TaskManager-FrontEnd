import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }
  task:Task=new Task();
  taskArray:any=[];
  ngOnInit(): void {
  }

}
