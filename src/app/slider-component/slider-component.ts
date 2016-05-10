import {Component} from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {ImageComponent} from '../image-component/image-component';
import {SliderImage, SliderService} from '../slider-service/slider-service';
import {CaptionComponent} from '../caption-component/caption-component';
import {SectionComponent} from '../section-component/section-component';


@Component({
    selector: 'slider-component',
    templateUrl: 'app//slider-component/slider-component.html',
    styleUrls: ['app//slider-component/slider-component.css'],
    providers: [SliderService],
    directives: [MD_CARD_DIRECTIVES, ImageComponent,
                 CaptionComponent, SectionComponent],
    pipes: []
})
export class SliderComponent {
    images: SliderImage[];
    activeIndex: number = 0;

    constructor(_sliderService: SliderService) {
        this.images = _sliderService.getSampleImages();
    }

    isActiveIndex(i: number): boolean {
        return i == this.activeIndex;
    }
    increaseActiveIndex() {
        if (this.activeIndex < this.images.length) {
            this.activeIndex++;
        }
    }

    decreaseActiveIndex() {
        if (this.activeIndex > 0) {
            this.activeIndex--;
        }
    }
}
