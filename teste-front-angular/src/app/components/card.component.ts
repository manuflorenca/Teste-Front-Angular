import { Component, Input } from '@angular/core';


@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],

})

export class Card {
    @Input() imageUrl: string = 'assets/img_covid.jpg';
}