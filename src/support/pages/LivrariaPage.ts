import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import LivrariaElements from '../elements/LivrariaElements';
import BasePage from './BasePage';

export default class LivrariaPage extends BasePage {
  readonly livrariaElements: LivrariaElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.livrariaElements = new LivrariaElements(page);
  }

  async acessarLivraria(): Promise<void> {
    await this.livrariaElements.getBotaoBookStore().click();
  }
}
