import {Component} from 'angular2/core'
import {CourseService} from '../services/course'
import {AutoGrowDirective} from '../directives/autogrow'

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{ title }}
        <input type="text" autoGrow>
        <ul>
            <li *ngFor= '#course of courses'>{{course}}</li>
        </ul>
        `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CourseComponent {
    title = 'Some title';
    courses;

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}