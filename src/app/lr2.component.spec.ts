import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Lr2AppComponent } from '../app/lr2.component';

beforeEachProviders(() => [Lr2AppComponent]);

describe('App: Lr2', () => {
  it('should create the app',
      inject([Lr2AppComponent], (app: Lr2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'lr2 works!\'',
      inject([Lr2AppComponent], (app: Lr2AppComponent) => {
    expect(app.title).toEqual('lr2 works!');
  }));
});
