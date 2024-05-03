import { expect, test } from '@playwright/test'

test('sign up has a title', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await expect(page).toHaveTitle(/.*Cadastro/)
})

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('E-mail').fill('johndoe@example.com')
  await page.getByLabel('Celular').fill('99999999999')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Cadastro realizado com sucesso!')

  await expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Invalid Name')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('E-mail').fill('johndoe@example.com')
  await page.getByLabel('Celular').fill('99999999999')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText(
    'Oh não! Algo deu errado ao tentar realizar o cadastro.',
  )

  await expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')
})
