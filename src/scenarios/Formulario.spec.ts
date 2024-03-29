import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import FormularioPage from '../support/pages/FormularioPage';

test.describe('Teste de Preenchimento de Formulário', () => {
  let formularioPage: FormularioPage;
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    formularioPage = new FormularioPage(page);
    await page.goto(BASE_URL);
    await page.evaluate(() => {
      window.moveTo(0, 0);
    });
  });

  test('Formulário de Cadastro de Estudante', async () => {
    await formularioPage.preencherFormulario();
    await formularioPage.validarFormulario();
  });
});
