import { Lesson } from "./lesson/lesson";
export class LessonsService {
  getLessons(): Lesson[] {
    let lessons = <Lesson[]>JSON.parse(
      `[
        {
           "title":"Angular asoslari",
           "price":40,
           "duration":20,
           "intakeDeadline":"2022-05-03T23:25:26"
        },
        {
           "title":"Entity frameworks",
           "price":50,
           "duration":15,
           "intakeDeadline":"2022-07-25T23:25:26"
        },
        {
           "title":"Algortihms and DS",
           "price":45,
           "duration":30,
           "intakeDeadline":"2022-12-14T23:25:26"
        },
        {
           "title":"React asoslari",
           "price":40,
           "duration":20,
           "intakeDeadline":"2022-11-25T23:25:26"
        }
     ]
      `
    )
    // TO DO
    return lessons;
  }
}