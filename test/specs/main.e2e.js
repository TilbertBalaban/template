const MainPage = require('../pageobjects/main.page');

describe('My application', () => {
  it('should load items', async () => {
    await MainPage.open();

    await MainPage.loadItems();
    await expect(MainPage.items).toBeExisting();
  });
});
