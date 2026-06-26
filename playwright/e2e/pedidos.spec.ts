import { test, expect } from '@playwright/test';

 //AAA - Arrange, Act, Assert 
 
test('deve consultar um pedido aprovado', async ({ page }) => { 
  //Arrange - preparar
  await page.goto('http://localhost:5173/');
  // Checkpoint 
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');
  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');

  //Act - agir
  await page.getByTestId('search-order-id').fill('VLO-X2E61N');
  await page.getByTestId('search-order-button').click();

  //Assert - validar
  await expect(page.getByTestId('order-result-id')).toBeVisible();
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-X2E61N');
  
  await expect(page.getByTestId('order-result-status')).toBeVisible();
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');

});
