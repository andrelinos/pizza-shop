import { expect, test } from '@playwright/test'

test('sign has a title', async ({ page }) => {
  await page.goto('/sign-in')

  await expect(page).toHaveTitle(/.*Login/)
})

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText(
    'Enviamos um link de autenticação para seu e-mail',
  )

  await expect(toast).toBeVisible()
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText(
    'Oh não! Algo deu errado ou você ainda não tem cadastro!',
  )

  await expect(toast).toBeVisible()
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')
})

// Alternatively

test('sign in successfully by data-type', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const notificationComponent = await page.$(
    'section[aria-label="Notifications alt+T"]',
  )
  expect(notificationComponent).not.toBeNull()

  const orderedList = await notificationComponent?.$('ol')
  expect(orderedList).not.toBeNull()

  const listItem = await orderedList?.$('li')
  expect(listItem).not.toBeNull()

  const dataTypeAttributeValue = await listItem?.getAttribute('data-type')
  expect(dataTypeAttributeValue).toBe('success')
})

test('sign in with wrong credentials by data-type', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const notificationComponent = await page.$(
    'section[aria-label="Notifications alt+T"]',
  )
  expect(notificationComponent).not.toBeNull()

  const orderedList = await notificationComponent?.$('ol')
  expect(orderedList).not.toBeNull()

  const listItem = await orderedList?.$('li')
  expect(listItem).not.toBeNull()

  const dataTypeAttributeValue = await listItem?.getAttribute('data-type')
  expect(dataTypeAttributeValue).toBe('error')
})
