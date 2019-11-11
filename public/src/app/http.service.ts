import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

var superHackyDataHolder;

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    console.log("-----------------------------------constructor in http.service.ts")
    this.getTasks()
  }

  getTasks(){
    console.log("-----------------------------------get task happening in http.service.ts (client get)")
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => {
      console.log("Got our tasks!", data)
      console.log("calling getTask()")
      this.getTask(data[0]._id)
    });
  }



  getTask(task_id){
    let tempObservable = this._http.get('/tasks/' + task_id);
    tempObservable.subscribe(data => {
      console.log("Got our ONE task!", data)
    });
  }
}
