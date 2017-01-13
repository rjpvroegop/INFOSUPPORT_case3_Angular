import { KantileverAngularPage } from './app.po';

describe('kantilever-angular App', function() {
  let page: KantileverAngularPage;

  beforeEach(() => {
    page = new KantileverAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
