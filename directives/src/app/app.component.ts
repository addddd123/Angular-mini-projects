import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'directives';
  // courses=[0];
  // viewMode='map1';
  courses=[
    {id:1,name:'course 1'},
    {id:2,name:'course 2'},
    {id:3,name:'course 3'},
  ]
  addNew(){
    this.courses.push({id:4,name:'course 4'});
  }

}
 