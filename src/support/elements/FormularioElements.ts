import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class FormularioElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getBotaoForms(): Locator {
    return this.page.locator('text=Forms');
  }

  getBotaoPracticeForm(): Locator {
    return this.page.locator('text=Practice Form');
  }

  getCampoNome(): Locator {
    return this.page.locator('input[id=firstName]');
  }

  getCampoSobrenome(): Locator {
    return this.page.locator('input[id=lastName]');
  }

  getEmail(): Locator {
    return this.page.locator('input[id=userEmail]');
  }

  getGenero(): Locator {
    return this.page.locator('input[id=gender-radio-1]');
  }

  getTelefone(): Locator {
    return this.page.locator('input[id=userNumber]');
  }

  getDataNascimento(): Locator {
    return this.page.locator('input[id=dateOfBirthInput]');
  }
}
