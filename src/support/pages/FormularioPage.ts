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
    await this.page.evaluate(zoom => {
      document.body.style.transform = `scale(${zoom})`;
    }, 0.8);
    await this.formularioElements.getCampoNome().type(faker.name.firstName());
    await this.formularioElements
      .getCampoSobrenome()
      .type(faker.name.lastName());
    await this.formularioElements.getEmail().type('testeauto@abc.com');
    await this.formularioElements.getGenero().click({ force: true });
    await this.formularioElements.getTelefone().type('5590909055');
    await this.formularioElements.getDataNascimento().click();
    await this.formularioElements
      .getMesNascimento()
      .selectOption({ value: '4' });
    await this.formularioElements
      .getAnoNascimento()
      .selectOption({ value: '2011' });
    await this.formularioElements.getDiaNascimento().click();
    // Outra forma de informar a data
    // await this.formularioElements.getDataNascimento().press('Control+A');
    // await this.formularioElements.getDataNascimento().type('19/05/2011');
    await this.formularioElements.getAssunto().type('Computer Science');
    await this.page.keyboard.press('Tab');
    await this.formularioElements.getHobbies().click({ force: true });
    await this.formularioElements
      .getCampoAnexo()
      .setInputFiles('src/support/fixtures/example.jpg');
    await this.formularioElements
      .getEndereco()
      .type(faker.address.streetAddress());
    await this.formularioElements.getEstado().type('Haryana');
    await this.page.keyboard.press('Tab');
    await this.formularioElements.getCidade().type('Panipat');
    await this.page.keyboard.press('Tab');
    await this.formularioElements.getBotaoEnviar().click();
    await this.page.waitForTimeout(5000);
  }
}
