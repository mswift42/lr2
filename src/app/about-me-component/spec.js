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
import {AboutMe} from './about-me-component';

describe('AboutMe Component', () => {

    beforeEachProviders(()=> [AboutMe]);
    it('should create the app',
       inject([AboutMe], (app: AboutMe) => {
           expect(app).toBeTruthy();
       }));
});
