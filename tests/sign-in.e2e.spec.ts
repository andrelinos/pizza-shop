import { test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText(
    'Enviamos um link de autenticação para seu e-mail.',
  )

  await expect(toast).toBeVisible()
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Oh não! Algo deu errado ao tentar enviar o e-mail.')

  await expect(toast).toBeVisible()
})


// test('sign in with wrong credentials by data-type', async ({ page }) => {
//   await page.goto('/sign-in', { waitUntil: 'networkidle' })

//   await page.getByLabel('Seu e-mail').fill('wrong@example.com')
//   await page.getByRole('button', { name: 'Acessar painel' }).click()

//   const toastWrong = await page.$('[aria-label="Notifications alt+T"]')

//  expect(toastWrong)

//   await page.waitForTimeout(2000)


// })
