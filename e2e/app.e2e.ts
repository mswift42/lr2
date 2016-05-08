import { Lr2Page } from './app.po';

describe('lr2 App', function() {
  let page: Lr2Page;

  beforeEach(() => {
    page = new Lr2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('lr2 works!');
  });
});
