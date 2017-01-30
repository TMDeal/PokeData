import { PokeDataPage } from './app.po';

describe('poke-data App', function() {
  let page: PokeDataPage;

  beforeEach(() => {
    page = new PokeDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
