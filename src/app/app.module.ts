import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonsService } from './lessons.service';

@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
