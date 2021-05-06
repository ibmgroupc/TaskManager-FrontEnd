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

  ngOnInit(): void {
  }

}
