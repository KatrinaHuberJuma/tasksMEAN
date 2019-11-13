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
  displayEdit = false;
  currentTask = { title:"", description:""}

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    // this.getTasksFromService()
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      this.tasks = data;
    });
  }

  getOneTaskFromService(id){
    console.log("getting one task")
    let observable = this._httpService.getOneTask(id)
    observable.subscribe(data => {
      console.log(data)
      this.currentTask = data[0];
      this.displayEdit = true;
    });
  }

  deleteOneTaskFromService(id){
    console.log("getting one task")
    let observable = this._httpService.deleteOneTask(id)
    observable.subscribe(data => {
    });
  }

  onSubmit(){
    if (this.displayEdit){
      this.onEditSubmit()
    } else {
      this.onCreateSubmit()
    }
  }

  onCreateSubmit(){
    console.log("task in component: ", this.currentTask)
    let observable = this._httpService.createTask(this.currentTask)
    observable.subscribe(data => {
      this.displayEdit = false;
      this.currentTask = { title:"", description:""};
    })
  }

  onEditSubmit(){
    console.log("task in component: ", this.currentTask)
    let observable = this._httpService.editOneTask(this.currentTask)
    observable.subscribe(data => {
      this.currentTask = { title:"", description:""};
    })
  }
}



