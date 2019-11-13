import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task';
  tasks = [];
  currentTask = false;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasksFromService()
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      this.tasks = data;
    });
  }

  getOneTaskFromService(id){
    let observable = this._httpService.getOneTask(id)
    observable.subscribe(data => {
      console.log(data)
      this.currentTask = data[0];
    });
  }

  onSubmit(f: NgForm) {
    if (f.valid){
      
    }
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

  // onEditSubmit(id){
  //   let observable = this._httpService.getOneTask(id)
  //   observable.subscribe(data => {
  //     // console.log(data)
  //     // this.currentTask = data[0];
  //   });
  // }
}



