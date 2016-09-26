import {Component} from 'angular2/core';
import {CourseComponent} from './components/courses';
import {AuthorComponent} from './components/authors';
import {FavoriteComponent} from "./components/favorite";


@Component({
    selector: 'my-app',
    template: `<h1>blaat</h1>
              <button (click)="onClick()">test</button>
              <favorite [active]="post.isActive"></favorite>
              <input type="text" [(ngModel)]="title" />Preview: {{title}}
              <courses></courses>
              <authors></authors>`,
    directives: [CourseComponent,AuthorComponent,FavoriteComponent]
})

export class AppComponent {
    title = "sjaak";
    post = {
                isActive : true
            };

    onClick(){
        alert('khasbckjhcd');
    }

}