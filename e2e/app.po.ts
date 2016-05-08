export class Lr2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lr2-app h1')).getText();
  }
}
