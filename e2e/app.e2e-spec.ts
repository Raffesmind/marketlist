import { MarketlistPage } from './app.po';

describe('marketlist App', function() {
  let page: MarketlistPage;

  beforeEach(() => {
    page = new MarketlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
