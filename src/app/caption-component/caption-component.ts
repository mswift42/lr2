import {Component, Input} from '@angular/core';


@Component({
    selector: 'caption-component',
    templateUrl: 'app//caption-component/caption-component.html',
    styleUrls: ['app//caption-component/caption-component.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class CaptionComponent {
    @Input() captiontitle: String;
    @Input() captiontext: String;

    constructor() {}

}
