import { Ng4FlappyBirdsPage } from './app.po';

describe('ng4-flappy-birds App', () => {
  let page: Ng4FlappyBirdsPage;

  beforeEach(() => {
    page = new Ng4FlappyBirdsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
