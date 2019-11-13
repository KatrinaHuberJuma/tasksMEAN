import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

var superHackyDataHolder;

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
  }

  getTasks(){
    return this._http.get('/tasks');
  }

  getOneTask(task_id){
    return this._http.get('/tasks/' + task_id);
  }

  editOneTask(task){
    console.log('in service______________/tasks/' + task._id, task)
    return this._http.put('/tasks/' + task._id, task);
  }

  deleteOneTask(task_id){
    return this._http.delete('/tasks/' + task_id);
  }

  createTask(task){
    console.log("service create method", task)
    return this._http.post('/tasks', task);
  }
}
