import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LivrariaPage from '../support/pages/LivrariaPage';

test.describe('Teste de Livraria Online', () => {
  let livrariaPage: LivrariaPage;
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    livrariaPage = new LivrariaPage(page);
    await page.goto(BASE_URL);
    await page.evaluate(() => {
      window.moveTo(0, 0);
    });
  });

  test('Formulário de Cadastro de Estudante', async () => {
    await livrariaPage.acessarLivraria();
  });
});
