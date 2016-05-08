import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  beforeEachProviders
} from '@angular/core/testing';
import {provide} from '@angular/core';
import {SliderService} from './slider-service';


describe('SliderService Service', () => {

    beforeEachProviders(() => [SliderService]);


    it('should ...', inject([SliderService], (service: SliderService) => {

    }));

});
