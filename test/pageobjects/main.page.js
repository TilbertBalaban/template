const Page = require('./page');

class MainPage extends Page {
  get loadItemsButton() {
    return $('#load-items-btn');
  }

  get items() {
    return $('#items-list');
  }

  async loadItems() {
    await this.loadItemsButton.click();
  }

  open() {
    return super.open();
  }
}

module.exports = new MainPage();
