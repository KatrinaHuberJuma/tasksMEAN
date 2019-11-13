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

  
}
