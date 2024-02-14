import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class LivrariaElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getBotaoBookStore(): Locator {
    return this.page.locator('text=Book Store Application');
  }
}
