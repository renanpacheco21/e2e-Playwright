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

  getBotaoLogin(): Locator {
    return this.page.locator('#login');
  }

  getBotaoNovoUsuario(): Locator {
    return this.page.locator('#newUser');
  }

  getNome(): Locator {
    return this.page.locator('#firstname');
  }

  getSobrenome(): Locator {
    return this.page.locator('#lastname');
  }

  getNomeUsuario(): Locator {
    return this.page.locator('#userName');
  }

  getSenha(): Locator {
    return this.page.locator('#password');
  }
}
