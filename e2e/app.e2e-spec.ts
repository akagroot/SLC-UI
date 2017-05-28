import { SLCUIPage } from './app.po';

describe('slc-ui App', function() {
  let page: SLCUIPage;

  beforeEach(() => {
    page = new SLCUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
