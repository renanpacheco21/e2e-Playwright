import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import FormularioElements from '../elements/FormularioElements';
import BasePage from './BasePage';

export default class CadastroPage extends BasePage {
  readonly formularioElements: FormularioElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.formularioElements = new FormularioElements(page);
  }

  async preencherFormulario(): Promise<void> {
    await this.formularioElements.getBotaoForms().click();
    await this.formularioElements.getBotaoPracticeForm().click();
    await this.formularioElements.getCampoNome().type(faker.name.firstName());
    await this.formularioElements
      .getCampoSobrenome()
      .type(faker.name.lastName());
    await this.formularioElements.getEmail().type('testeauto@abc.com');
    await this.formularioElements.getGenero().click({ force: true });
    await this.formularioElements.getTelefone().type('5590909055');
    await this.formularioElements.getDataNascimento().press('Control+A');
    await this.formularioElements.getDataNascimento().type('01/02/2024');
  }
}
