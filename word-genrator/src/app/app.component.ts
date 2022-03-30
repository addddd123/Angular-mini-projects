import { Component } from '@angular/core';
import arrWords from "../utils/words";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-genrator';

  words='';
  limit=10;

  handleSlideChange(newLimit:number){
    this.limit=newLimit;
  }
 genrate(){
   this.words=arrWords.slice(0,this.limit).join(" ");
   console.log(this.words)
   
 }
}
