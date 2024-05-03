import { expect, test } from '@playwright/test'

test('update profile cancel', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByRole('button', { name: 'Cancelar' }).click()
})

test('update profile close', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByRole('button', { name: 'Close' }).click()
})

test('update profile successfully', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Pizza Master')
  await page.getByLabel('Descrição').fill('Descrição da loja')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso')

  await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(page.getByRole('button', { name: 'Pizza Master' })).toBeVisible()
})

test('update profile with erro', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Invalid Name')
  await page.getByLabel('Descrição').fill('Descrição da loja')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText(
    'Oh não! Algo deu errado ao atualizar perfil, tente novamente',
  )

  await expect(toast).toBeVisible()
})
