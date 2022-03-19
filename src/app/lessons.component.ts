import { Component } from "@angular/core";
import { LessonsService } from "./lessons.service";


@Component({
  selector:'lessons',
  templateUrl: './lessons.component.html'
})
export class LessonsComponent {
  constructor(lessonsService: LessonsService){
    this.lessons = lessonsService.getLessons();
  }
  title:string = 'Darslar ro\'yxati';
  userName: string = "";
  lessons!: Array<string>;
  logoUrl:string = 'https://t4.ftcdn.net/jpg/02/81/70/65/240_F_281706507_HFR2DYj1w8bYo6AlzgEtFGPRPegu2yu9.jpg';

  getTitle(): string {
    return this.title;
  }

  onInput(event:any){
    this.userName = event.target.value
    console.log(event);
  }
  onButtonClicked(){
    console.log("Button bosildi");
  }
 
}