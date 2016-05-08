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
import {SidenavService} from './sidenavservice';


describe('Sidenavservice Service', () => {

    beforeEachProviders(() => [SidenavService]);


    it('should ...', inject([SidenavService], (service: SidenavService) => {

    }));

});
