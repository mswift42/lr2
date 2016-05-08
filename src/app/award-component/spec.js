import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from '@angular/testing';
import {provide} from '@angular/core';
import {AwardComponent} from './award-component';

describe('AwardComponent Component', () => {

    beforeEachProviders((): any[] => []);


    it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        return tcb.createAsync(AwardComponent).then((fixture) => {
            fixture.detectChanges();
        });
    }));

});
