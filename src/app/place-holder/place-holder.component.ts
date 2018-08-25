import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'app-place-holder',
    templateUrl: './place-holder.component.html',
    styleUrls: ['./place-holder.component.css'],
    encapsulation: ViewEncapsulation.None,
})

export class PlaceHolderComponent implements OnInit {

    numberItems = [];
    @Input() itemRepeat: Number;

    ngOnInit() {
        this.numberItems = Array(this.itemRepeat).fill(0).map((x, i) => i);
    }
}
