import {Component} from 'angular2/core';
import {CourseComponent} from './components/courses';
import {AuthorComponent} from './components/authors';


@Component({
    selector: 'my-app',
    template: '<h1>blaat</h1><courses></courses><authors></authors>',
    directives: [CourseComponent,AuthorComponent]
})
export class AppComponent {  }