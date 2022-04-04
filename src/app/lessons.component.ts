import { Component, Input } from "@angular/core";
import { Lesson } from "./lesson/lesson";
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
  lessons!: Lesson[];
  selectedLesson!: Lesson;

  getTitle(): string {
    return this.title;
  }

  OnSelect(lesson: Lesson){
    this.selectedLesson = lesson;
    console.log(this.selectedLesson);
  }

 
}