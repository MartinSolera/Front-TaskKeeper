import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseURL = "http://localhost:8080/api/";

  constructor(private httpClient : HttpClient) {

  }

  getAllTask():Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseURL}` + "tasks");
  }


  

}
