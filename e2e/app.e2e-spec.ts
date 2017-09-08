import { VmPage } from './app.po';

describe('vm App', () => {
  let page: VmPage;

  beforeEach(() => {
    page = new VmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
