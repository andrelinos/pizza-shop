import { expect, test } from '@playwright/test'

test('list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()

  await expect(
    page.getByRole('cell', { name: 'Customer 10', exact: true }),
  ).toBeVisible()
})

test('paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Próxima página' }).click()

  await expect(
    page.getByRole('cell', { name: 'Customer 11', exact: true }),
  ).toBeVisible()

  await expect(
    page.getByRole('cell', { name: 'Customer 20', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Última página' }).click()

  await expect(
    page.getByRole('cell', { name: 'Customer 51', exact: true }),
  ).toBeVisible()

  await expect(
    page.getByRole('cell', { name: 'Customer 60', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Página anterior' }).click()

  await expect(
    page.getByRole('cell', { name: 'Customer 41', exact: true }),
  ).toBeVisible()

  await expect(
    page.getByRole('cell', { name: 'Customer 50', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()

  await expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()

  await expect(
    page.getByRole('cell', { name: 'Customer 10', exact: true }),
  ).toBeVisible()
})

test('filter by order id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('ID do pedido').fill('order-11')

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  expect(page.getByRole('cell', { name: 'order-11' })).toBeVisible()
})

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Nome do cliente').fill('Customer 11')

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  expect(page.getByRole('cell', { name: 'Customer 11' })).toBeVisible()
})

test('clear filter', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Nome do cliente').fill('Customer 11')

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(page.getByRole('cell', { name: 'Customer 11' })).toBeVisible()

  await page.getByRole('button', { name: 'Remover filtros' }).click()

  await expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()

  await expect(
    page.getByRole('cell', { name: 'Customer 10', exact: true }),
  ).toBeVisible()
})

test('filter by status pending', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()
  await page.getByLabel('Pendente').click()

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  expect(page.getByRole('cell', { name: 'Pendente' })).toHaveCount(10)
})

test('filter by status preparing', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()
  await page.getByLabel('Preparando').click()

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(page.getByRole('cell', { name: 'Preparando' })).toHaveCount(10)
})

test('filter by status delivering', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()
  await page.getByLabel('Enviado').click()

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(page.getByRole('cell', { name: 'Enviado' })).toHaveCount(10)
})

test('filter by status delivered', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()
  await page.getByLabel('Entregue').click()

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(page.getByRole('cell', { name: 'Entregue' })).toHaveCount(10)
})

test('filter by status canceled', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()
  await page.getByLabel('Cancelado').click()

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(page.getByRole('cell', { name: 'Cancelado' })).toHaveCount(10)
})
