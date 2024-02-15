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

  async acessarLivrariaLogin(): Promise<void> {
    await this.livrariaElements.getBotaoBookStore().click();
    await this.livrariaElements.getBotaoLogin().click();
    await this.livrariaElements.getBotaoNovoUsuario().click();
    await this.livrariaElements.getNome().type('Renan');
    await this.livrariaElements.getSobrenome().type('Pacheco');
    await this.livrariaElements.getNomeUsuario().type('testeQA');
    await this.livrariaElements.getSenha().type('Abc@1234');
    await this.page.mouse.wheel(0, 200);
    await this.livrariaElements.getSenha().click();
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Enter');
  }
}
