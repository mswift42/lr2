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
import {ResService} from './res-service';


describe('ResService Service', () => {

    beforeEachProviders(() => [ResService]);


    it('should ...', inject([ResService], (service: ResService) => {

    }));

});
