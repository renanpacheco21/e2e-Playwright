import { expect, test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LivrariaPage from '../support/pages/LivrariaPage';

test.describe('Teste de Livraria Online', () => {
  let livrariaPage: LivrariaPage;
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.books_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    livrariaPage = new LivrariaPage(page);
    await page.goto(BASE_URL);
    await page.evaluate(() => {
      window.moveTo(0, 0);
    });
  });

  test('Acessar Livraria e Realizar Login', async () => {
    await livrariaPage.realizarLogin();
    const validaLogin = await livrariaPage.page
      .waitForSelector('text=Invalid username or password!', { timeout: 5000 })
      .catch(() => null);
    if (validaLogin) {
      await livrariaPage.realizarCadastroUsuario();
      await livrariaPage.realizarLogin();
    }
  });
});
