import {Component, Input} from 'angular2/core';


@Component({
    selector: 'favorite',
    template: `<i class="glyphicon" [class.glyphicon-star-empty]="!active" [class.glyphicon-star]="active" (click)="onClick()"></i>`
})

export class FavoriteComponent {
    @Input() active = false;

    onClick(){
        this.active = !this.active;

    }
}