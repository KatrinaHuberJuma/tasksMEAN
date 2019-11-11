import { Component } from '@angular/core';
import { HttpService } from './http.service';
console.log("-----------------------------------in app.component.ts")
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  constructor(private _httpService: HttpService){}
}
