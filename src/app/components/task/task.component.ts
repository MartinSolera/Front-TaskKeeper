import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  
  listTask:Task[];

  constructor(private taskService : TaskService) {

  }

  ngOnInit(): void {
    this.getTask(); 
  }

  private getTask(){
    this.taskService.getAllTask().subscribe(dato => {
      this.listTask = dato; 
    })
  }

}
