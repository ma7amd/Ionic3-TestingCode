import { Ng4CribsPage } from './app.po';

describe('ng4-cribs App', () => {
  let page: Ng4CribsPage;

  beforeEach(() => {
    page = new Ng4CribsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
